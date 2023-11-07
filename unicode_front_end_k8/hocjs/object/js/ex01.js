//Object nguyên bản ({})

//Object được cấu tạo bởi các cặp key: value

Object.prototype.welcome = "Khóa học lập trình Front-End";
Object.prototype.getMessage = function () {
  return this.welcome;
};

var users = {
  name: "Hoàng An",
  age: 30,
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
  getInfo: function () {
    return this.getName() + " - " + this.getAge();
  },
  setName: function (value) {
    this.name = value;
  },
  setAge: function (value) {
    this.age = value;
  },
};

// users.name = 'Hoàng An';
// users['age'] = 30;
// users.getName = function(){
//     return users.name
// }

users.setName("Hoàng An Unicode");

console.log(users.getInfo());

// console.log(users.name)
// //console.log(users.age)
// console.log(users['age'])

var customers = [
  {
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
  },

  {
    name: "Nguyễn Văn B",
    email: "nguyenvanb@gmail.com",
  },

  {
    name: "Nguyễn Văn C",
    email: "nguyenvanc@gmail.com",
  },
];

// customers.forEach(function(customer){
//     var info = `Họ tên: ${customer.name} - Email: ${customer.email}`;
//     console.log(info)
// })

//Function Constuctor

//Tạo bản thiết kế cho object
function Customer(nameVal, ageVal) {
  //Tạo thuộc tính
  this.name = nameVal;
  this.age = ageVal;
  (this.getName = function () {
    return this.name;
  }),
    (this.getAge = function () {
      return this.age;
    });
}

Customer.prototype.min = 30;

//Tạo object từ bản thiết kế
var customer = new Customer("Hoàng An Unicode", 50);
console.log(customer.min);

/*
Bài tập: Viết thêm prototype cho Function Constructor String
*/

// String.prototype.getCurrency = function(){
//     return this.valueOf() + ' đ'
// }

// var price = '12000';
// console.log(price.getCurrency())

// console.log(Number)

Number.prototype.getMoney = function (currency) {
  return this.valueOf().toLocaleString() + " " + currency;
};

var price = 12000;
console.log(price.getMoney("VND"));

//Tạo object không có prototype
var a = Object.create(null);
a.name = "Hoàng An";
a.age = 30;

console.log(a);
