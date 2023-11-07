class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

class Student extends User {
  constructor(name, age) {
    super(name, age); //gọi constructor của class cha (User)
  }
  getInformation() {
    return `- Name: ${this.name} - Age: ${this.age}`;
  }
}

var student = new Student("Hoàng An", 30);
console.log(student);

// var user = new User("Hoàng An", 30);
// console.log(user);
