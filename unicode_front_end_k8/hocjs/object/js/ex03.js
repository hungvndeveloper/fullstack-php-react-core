//Các phương thức, thuộc tính xử lý Object
console.log([Object]);

//Lấy danh sách key của Object
var customers = {
  name: "Hoàng An",
  age: 30,
  location: "Hà Nội",
};
//=> Kiểm tra object có dữ liệu hay không?
var keys = Object.keys(customers);
if (keys.length) {
  console.log("Object có dữ liệu");
  keys.forEach(function (key) {
    console.log(customers[key]);
  });
} else {
  console.log("Object không có dữ liệu");
}

//Kiểm tra 1 biến có phải object hay không?
//- array
//- object
//- null
var users = [];
if (typeof users === "object" && !Array.isArray(users) && users !== null) {
  console.log("Đây là object");
} else {
  console.log("Đây không phải object");
}

//Chỉ lấy ra các thuộc tính trong 1 object

var users = {
  name: "Hoàng An", //string
  age: 30, //number
  getName: function () {
    return this.name;
  }, //function
};

if (Object.keys(users).length) {
  Object.keys(users).forEach(function (key) {
    if (typeof users[key] !== "function") {
      console.log(key);
    }
  });
}

//Xóa 1 thuộc tính trong Object
var customers = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  address: "Hà nội",
  getName: function () {
    return this.name;
  },
};

delete customers.email; //xóa thuộc tính email trong object customers
delete customers.getName; //xóa phương thức getName trong object customers

console.log(customers);

//Optional Chaining

var a = {
  name: "Hoàng An",
  getName: function () {
    return this.name;
  },
};

// if (typeof a === "object" && a.name !== undefined) {
//   console.log(a.name);
// } else {
//   console.log("Không tồn tại");
// }

console.log(a?.name); //áp dụng với thuộc tính

console.log(a.getName?.()); //áp dụng với phương thức
