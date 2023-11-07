//Các cách tạo object
/*
- Object nguyên bản: {}
- Function Constructor
- Class
*/
class Person {
  //Các thuộc tính và phương thức
  //Thuộc tính khai báo trong constructor()
  constructor(name, age, address) {
    //console.log("Hàm này sẽ chạy đầu tiên khi object được khởi tạo");
    this.name = name;
    this.age = age;
    this.address = address;
    console.log("Person constructor");
  }

  getName() {
    return this.name;
  }

  setName(value) {
    this.name = value;
  }

  getAge() {
    return this.age;
  }

  getJob() {
    return this.job;
  }
}

//Kế thừa
class Girl extends Person {
  constructor(name, age, address) {
    console.log("girl constructor");
    super(name, age, address); //Chạy hàm constructor của class cha
    this.job = "Software Developer";
  }

  /*
  Class con có toàn quyền sử dụng các thuộc tính và phương thức của class cha
  Ngoài ra, clas con có thể tự tạo thêm thuộc tính mới
  */

  getInfo() {
    return this.getName() + " - " + this.getAge();
  }
}

const girl = new Girl("Hoàng An", 31, "Hà Nội");
console.log(girl.getInfo());
console.log(girl.getJob());
