class Person {
  //Hàm khởi tạo
  constructor(name, email) {
    console.log(`Chạy constructor`);
    //Thuộc tính
    this.name = name;
    this.email = email;
  }

  //Phương thức
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  setName(value) {
    this.name = value;
  }
}

class User extends Person {
  constructor(name, email) {
    super(name, email); //gọi constructor của class Person
    this.age = 31;
  }

  getAge() {
    return this.age;
  }

  getInfo() {
    return `Name: ${this.getName()} - Email: ${this.getEmail()} - Age: ${this.getAge()}`;
  }
}

// const person = new Person("Hoàng An", "contact@gmail.com");
// person.setName(`Hoàng An Unicode`);
// console.log(person.getName());
// console.log(person.getEmail());

// function Car() {
//   this.name = "Honda";
//   this.year = 2023;

//   this.getName = function () {
//     return this.name;
//   };
// }

// const car = new Car();
// console.log(car.getName());

const user = new User(`Hoàng An`, "contact@unicode.vn");
console.log(user.getInfo());
