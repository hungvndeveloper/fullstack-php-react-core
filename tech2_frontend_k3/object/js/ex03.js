//Function Constructor
//Đặt tên theo cú pháp PascalCase
function User(name, age) {
  //Định nghĩa các thuộc tính
  this.name = name;
  this.age = age;

  this.getName = function () {
    return this.name;
  };

  this.getAge = function () {
    return this.age;
  };

  this.setName = function (name) {
    this.name = name;
  };

  this.setAge = function (age) {
    this.age = age;
  };

  this.test = function () {
    console.log(this.getName());
  };
}

var user = new User("Hoàng An", 30);
///console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.getName());
user.test();

var person = new User("Anh Tuấn", 35);
//console.log(person);

var person2 = {
  name: "Anh Tuấn 2",
  age: 35,
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
  setName: function (name) {
    this.name = name;
  },
  setAge: function (age) {
    this.age = age;
  },
};
//console.log(person2);
