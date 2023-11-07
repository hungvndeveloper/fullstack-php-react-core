var app = document.querySelector(".app"); //parent element
//var body = document.body; //parent element

var h2 = document.createElement("h2");
h2.classList.add("title");
h2.innerText = "Unicode Academy";
h2.style.color = "red";

app.appendChild(h2); //đẩy xuống dưới

var h3 = document.createElement("h3");
h3.classList.add("title");
h3.innerText = "Khóa học Front-End";
h3.style.color = "red";

app.appendChild(h3);

var h1 = document.createElement("h1");
h1.classList.add("title");
h1.innerText = "Khóa học Front-End";
h1.style.color = "red";

//app.append(h1);
app.prepend(h1); //Đẩy lên trên

/*
<p>Unicode Academy</p>
*/

var text = document.createTextNode("Khóa học Fullstack");
//console.log([text]);

app.append(text);

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  text.data = "Khóa học Front-End Dev K8";
});

var p = document.createElement("p");
p.classList.add("content");
p.innerText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur aut adipisci rerum porro vel, obcaecati quo vitae mollitia officiis tempora doloremque amet. Quae, architecto. Aliquid, cupiditate voluptate. Quibusdam, deleniti!`;
app.insertBefore(p, h2);

var div = document.createElement("div");
div.innerText = "Tôi là Tạ Hoàng An";

var removeBtn = document.querySelector(".remove");
removeBtn.addEventListener("click", function () {
  //app.removeChild(h2);
  app.replaceChild(div, h2);
});
