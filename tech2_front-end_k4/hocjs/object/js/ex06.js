//Function Constructor

function Car(name, year) {
  //Khai báo các thuộc tính
  this.name = name;
  this.year = year;
  //Khai báo phương thức
  this.getName = function () {
    return this.name;
  };
  this.getYear = function () {
    return this.year;
  };
}

Car.prototype.getMessage = function () {
  return "Tôi muốn mua oto";
};

var honda = new Car("Honda", 2023);
console.log(honda.getName());
console.log(honda.getYear());
console.log(honda.getMessage());

var toyota = new Car("Toyota", 2021);
console.log(toyota.getName());
console.log(toyota.getMessage());
