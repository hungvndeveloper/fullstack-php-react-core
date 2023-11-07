//Arrow function (Hàm mũi tên)

//Arrow function không tham số
const funcA = () => {
  console.log("A");
};

funcA();

//Arrow function có 1 tham số (không cần cặp ngoặc tròn)
const funcB = (name) => {
  console.log(name);
};

funcB("Hoàng An");

//Arrow function có nhiều tham số

const funcC = (name, age) => {
  console.log(name, age);
};

funcC("Hoàng An", 30);

//Arrow function có return
const funcD = (a, b) => a + b;

console.log(funcD(5, 10));

//Arrow function có return);

const button = document.querySelector("button");
const content = document.querySelector(".content");
button.addEventListener("click", function (e) {
  // console.log(e.target.innerText);
  // console.log(this);
  content.innerHTML = `<button>content</button>`;
  content.querySelector("button").addEventListener("click", (e) => {
    console.log(this);
  });
});

const getData = ({ name: userName, age }) => {
  console.log(userName);
  console.log(age);
};

getData({ name: "Hoàng An", age: 30 });

//Destructuring => Phá vỡ cấu trúc

// const customers = {
//   name: "Hoàng An",
//   address: "Hà Nội",
//   age: 50,
// };

// const { age = 30, address, name: customerName } = customers;

// console.log(address, age, customerName);

// const customers = ["Hoàng An", 30]; //Tuân thủ thứ tự

// console.log(customers);

// const [name, age, address = "Hà Nội"] = customers;

// console.log(name, age, address);

//Spread operator => Đọc nội dung của array, object để đưa vào 1 array hoặc object khác

// const info = {
//   address: "Hà Nội",
//   job: "Software Engineer",
// };

// const customers = {
//   name: "Hoàng An",
//   age: 30,
//   ...info,
// };

// console.log(customers);

// const info = ["Hà Nội", "Software Engineer"];

// const customers = [...info, "Hoàng An", 30];

// console.log(customers);

/*
Các ứng dụng của spread operator
- Trải các phần tử của object, array ra ngoài
- clone object, array
*/

const a = {
  name: "Hoàng An",
  age: 30,
};

const b = { ...a }; //clone object. Nếu muốn clone array => Đổi {} thành []
b.name = "Hoàng An 2";
console.log(a);

/*
Nếu clone array, object => Chỉ áp dụng với 1 cấp
Nếu object, array có nhiều cấp => Sử dụng JSON để clone (JSON.stringify và JSON.parse)

*/
