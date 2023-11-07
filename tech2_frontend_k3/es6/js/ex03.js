class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge = () => {
    return this.age;
  };
}

class Auth extends User {
  constructor(name, age, email) {
    super(name, age);
    this.email = email;
  }
  getFullInfo = () => {
    return this.name + " - " + this.age;
  };
}

// const user = new User("hoàng an", 30);

// console.log(user);

const auth = new Auth("Hoàng An", 30, "hoangan.web@gmail.com");
console.log(auth);
