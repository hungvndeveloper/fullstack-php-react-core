var serverApi = `https://43jf2n-8080.csb.app`;

var todoForm = document.querySelector(".todos__form");
var todoInner = document.querySelector(".todos__inner");
var todoFilters = document.querySelector(".todos__filters");
var todoLoadmore = document.querySelector(".todos__loadmore button");
var filterAll = todoFilters.children[0];
var filterCompleted = todoFilters.children[1];
var filterActive = todoFilters.children[2];

var limit = 3;
var limitTotal = limit;
var initialLoadMoreText;
var currentStatus = "all";

var render = function (todos, options) {
  // var completedCount = 0;
  // var activeCount = 0;

  if (todos.length) {
    todoInner.innerText = "";
    todos.forEach(function (todo) {
      //Thẻ div
      var div = document.createElement("div");
      div.classList.add("todos--item");
      if (todo.is_completed) {
        div.classList.add("completed");
      }

      //Thẻ input checkbox
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      if (todo.is_completed) {
        checkbox.checked = true;
      }
      checkbox.addEventListener("change", function () {
        handleMarkCompleted(todo.id, todo.is_completed);
      });

      div.appendChild(checkbox);

      //Thẻ span chứa tên công việc
      var spanName = document.createElement("span");
      spanName.classList.add("name");
      spanName.innerText = todo.name;

      div.appendChild(spanName);

      //Thẻ span chứa nút xóa
      var spanRemove = document.createElement("span");
      spanRemove.classList.add("remove");
      spanRemove.innerHTML = "&times;";
      spanRemove.addEventListener("click", function () {
        handleRemove(todo.id);
      });

      div.appendChild(spanRemove);

      todoInner.appendChild(div);
    });
  } else {
    todoInner.innerText = `Không có công việc`;
  }

  //Nếu limitTotal < tổng số bản ghi trả về từ server => Nút loadmore vẫn hoạt động
  //Nếu limitTotal >= tổng số bản ghi trả về từ server => Nút loadmore sẽ không hoạt động

  if (limitTotal >= options.total) {
    todoLoadmore.setAttribute("disabled", "disabled");
  } else {
    todoLoadmore.removeAttribute("disabled");
  }

  //Đếm số lượng công việc
  // if (status === "all") {
  //   filterAll.children[0].innerText = options.total;
  //   filterCompleted.children[0].innerText = completedCount;
  //   filterActive.children[0].innerText = activeCount;
  // }
};

var getTodos = async function (status = "all", isLoading = false) {
  if (isLoading) {
    todoInner.innerText = `Đang tải...`;
  }

  var query = {
    _sort: "is_completed",
    _order: "asc",
    _limit: limitTotal,
  };

  if (status === "completed" || status === "active") {
    query.is_completed = status === "completed" ? true : false;
  }

  query = new URLSearchParams(query).toString();

  var response = await fetch(
    `${serverApi}/todos${query ? "?" + query : query}`,
  );

  if (response.ok) {
    var todos = await response.json();

    currentStatus = status;

    render(todos, {
      total: response.headers.get("x-total-count"),
    });

    getTodoCount("all");
    getTodoCount("completed");
    getTodoCount("active");
  }
};

var getTodoCount = async function (status = "all") {
  var query = {};

  if (status === "completed" || status === "active") {
    query.is_completed = status === "completed" ? true : false;
  }

  query = new URLSearchParams(query).toString();

  var response = await fetch(
    `${serverApi}/todos${query ? "?" + query : query}`,
  );

  if (response.ok) {
    const todos = await response.json();

    if (status === "all") {
      filterAll.children[0].innerText = todos.length;
    }

    if (status === "completed") {
      filterCompleted.children[0].innerText = todos.length;
    }

    if (status === "active") {
      filterActive.children[0].innerText = todos.length;
    }
  }
};

var resetLimitTotal = function () {
  limitTotal = limit;
};

var addTodo = async function (todo) {
  var response = await fetch(`${serverApi}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (response.ok) {
    getTodos(); //Render lại dữ liệu
  } else {
    alert("Đã có lỗi xảy ra. Vui lòng thử lại sau");
  }
};

var removeTodo = async function (id) {
  var response = await fetch(`${serverApi}/todos/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    getTodos(currentStatus); //re-render
  } else {
    alert("Đã có lỗi xảy ra. Vui lòng thử lại sau");
  }
};

var markCompleted = async function (id, status) {
  var response = await fetch(`${serverApi}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      is_completed: status,
    }),
  });

  if (response.ok) {
    getTodos(currentStatus);
  }
};

filterAll.addEventListener("click", function () {
  resetLimitTotal();
  getTodos("all", true);
});

filterCompleted.addEventListener("click", function () {
  resetLimitTotal();
  getTodos("completed", true);
});

filterActive.addEventListener("click", function () {
  resetLimitTotal();
  getTodos("active", true);
});

Array.from(todoFilters.children).forEach(function (filter) {
  filter.addEventListener("click", function () {
    todoFilters.querySelector("button.active").classList.remove("active");
    filter.classList.add("active");
  });
});

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var doNameEl = this.children[0]; //element

  var doName = doNameEl.value;

  var todo = {
    name: doName,
    is_completed: false,
  };

  addTodo(todo);

  doNameEl.value = "";
});

todoLoadmore.addEventListener("click", async function (e) {
  //mặc định _limit = 3
  //Khi click vào xem thêm => _limit = 6
  //Khi click vào xem thêm lần nữa => _limit = 9

  e.target.innerText = `Đang tải...`;

  limitTotal += limit;
  await getTodos(currentStatus);

  e.target.innerText = initialLoadMoreText;
});

var handleRemove = function (id) {
  if (confirm("Bạn có chắc chắn?")) {
    // e.target.parentElement.remove();
    removeTodo(id);
  }
};

var handleMarkCompleted = function (id, isCompleted) {
  markCompleted(id, !isCompleted);
};

document.addEventListener("DOMContentLoaded", function () {
  getTodos("all", true);

  initialLoadMoreText = todoLoadmore.innerText;

  todoFilters.children[0].classList.add("active");
});
