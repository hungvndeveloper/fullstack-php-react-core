const users = {
  status: "pending",
  data: [],
};

//Update
const customer = [];

if (customer.length > 0) {
  users.data = customer;
} else {
  users.data = {};
}

users.data.forEach?.((user) => {
  console.log(user);
});

/*
- Luôn phải khai báo kiểu dữ liệu mặc định
- Trong quá trình xử lý dữ liệu, nếu phải update => Lưu ý kiểu dữ liệu update

Optional Chaining 
- Với thuộc tính: tendoituong?.tenthuoctinh
- Với phương thức: tendoituong.tenphuongthuc?.()

=> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
*/
