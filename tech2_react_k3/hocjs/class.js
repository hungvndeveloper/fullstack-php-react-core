/*
Object JS
- Object nguyên bản
- Function Constructor
- Class
*/

// function Customer() {
//   (this.name = "Hoàng An"), (this.age = 30);
//   this.getName = () => {
//     return this.name;
//   };
// }

// const customer = new Customer();

// console.log(customer.getName());

class Customer {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  setName = (name) => {
    this.name = name;
  };

  getName = () => {
    return this.name;
  };

  getAge = () => {
    return this.age;
  };
}

class CustomerInfo extends Customer {
  constructor(name, age) {
    super(name, age);
  }

  getInfo = () => {
    return `Name: ${this.getName()} - Age: ${this.getAge()}`;
  };
}

const customerInfo = new CustomerInfo("Hoàng An Unicode", 30);
customerInfo.setName("Tech2");
console.log(customerInfo.getInfo());
