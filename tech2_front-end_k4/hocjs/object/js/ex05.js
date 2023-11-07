Object.prototype.getMessage = function () {
  return "xin chào unicode";
};

Object.prototype.msg = `Học lập trình tại Unicode`;

var users = {
  name: "Hoàng An",
  getName: function () {
    return this.name;
  },
  setName: function (value) {
    this.name = value;
  },
};

console.log(users.getMessage());

var customers = {};

console.log(customers.getMessage());
console.log(customers.msg);

Array.prototype.forEach2 = function (callback) {
  //Lấy được array
  var arr = this;
  if (typeof callback === "function") {
    if (arr.length) {
      for (var index = 0; index < arr.length; index++) {
        callback(arr[index], index);
      }
    }
  }
};

Array.prototype.push2 = function (...args) {
  var arr = this;
  if (args.length) {
    for (var index = 0; index < args.length; index++) {
      arr[arr.length] = args[index];
    }
  }
};

Array.prototype.unshift2 = function (...args) {
  var tmp = this.map(function (item) {
    return item;
  });
  var result = this;

  if (args.length) {
    for (var index = 0; index < args.length; index++) {
      result[index] = args[index];
    }
  }

  if (tmp.length) {
    var count = args.length;
    for (var index = 0; index < tmp.length; index++) {
      result[count] = tmp[index];
      count++;
    }
  }
};

var items = ["Item 1", "Item 2", "Item 3"]; //Function Constructor Array
items.unshift2("Item 4");
console.log(items);
// items.forEach2(function (item, index) {
//   console.log(item, index);
// });

//Function Constructor
