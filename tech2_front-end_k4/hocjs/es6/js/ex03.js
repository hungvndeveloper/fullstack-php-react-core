//Arrow Function

// const getMessage = (msg) => {
//   return `Xin chào Unicode ${msg}`;
// };

// console.log(getMessage(`Hoàng An`));

// const getTotal = (a, b) => {
//logic
//   return a + b;
// };

const getTotal = (a, b) => a + b;

console.log(getTotal(10, 20));

// const getStatus = () => ({ status: "success", title: "Thành công" });

// const getStatus = () => [1, 2, 3];

// console.log(getStatus());

const getOptions = ({ name, age }) => {
  console.log(name, age);
};

// getOptions({ name: "Hoàng An", age: 30 });

const users = [
  {
    id: 1,
    name: "Hoàng An",
    email: "email1@gmail.com",
  },
  {
    id: 2,
    name: "Hoàng An 2",
    email: "email1@gmail.com",
  },
  {
    id: 3,
    name: "Hoàng An 3",
    email: "email1@gmail.com",
  },
];

// users.forEach(({ name, email }, index) => {
//   console.log(index, name, email);
// });

const html = users
  .map(
    ({ name, email }) => `<div>
<p>${name}</p>
<p>${email}</p>
</div>`,
  )
  .join("");

document.write(html);
