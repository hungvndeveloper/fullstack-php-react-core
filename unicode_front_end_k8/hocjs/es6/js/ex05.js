/*
async await => Xử lý bất đồng bộ bằng cách viết hàm
*/
const getUsers = () => {
  const promise = new Promise((resolve, reject) => {
    //resolve => Thành công
    //reject => Thất bại
    setTimeout(() => {
      resolve(JSON.stringify(["User 1", "User 2", "User 3"]));
      //reject("Lấy user bị lỗi");
    }, 5000);
  });

  return promise;
};

//getUsers() => Trả về promise

const callUsers = async () => {
  let users = await getUsers();
  users = await JSON.parse(users);
  console.log(users);
  console.log("Thành công");
};

callUsers();

/*
Muốn sử dụng async await để gọi hàm bất đồng bộ theo cách viết ngang hàng
- định nghĩa async function
- bên trong hàm, gọi hàm bất đồng bộ bằng cách thêm từ khóa await phía trước (await chỉ hoạt động trong async function)
- async function luôn trả về 1 promise
*/

const getCustomers = async () => {
  return 1;
};

const callCustomers = async () => {
  let customers = await getCustomers();
  console.log(customers);
};

callCustomers();

console.log("demo fetch api");

// fetch(`https://jsonplaceholder.typicode.com/todos`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

const getTodos = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();
  console.log(data);
};

getTodos();
