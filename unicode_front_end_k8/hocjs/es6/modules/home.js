const home = "Home Page";
export default function getHome() {
  return "Đây là trang chủ";
}

const users = ["Hoàng An", 31];

const customers = {
  name: "Tuấn",
  email: "tuan@gmail.com",
};

export const getCustomerList = () => {
  return ["User 1", "User 2", "User 3"];
};

export { users, customers }; //export name

//export default { home }; //export default

/*
export default chỉ được phép export 1 lần trong 1 file
export name sẽ được phép export nhiều trong 1 file

Lưu ý: 
- Có thể export và export default trực tiếp vào các biến, hàm, class,...
- export default trực tiếp chỉ áp dụng được với hàm và class
*/
