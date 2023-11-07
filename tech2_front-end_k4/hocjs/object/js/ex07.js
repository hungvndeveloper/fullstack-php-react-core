//Optional Chaining với thuộc tính
// var users;
// if (users?.length) {
//   console.log("Có độ dài trong mảng");
// }

//Optional chaining với phương thức
//biến là undefined => Thêm dấu ?. trước tên phương thức
//biến là 1 object => Thêm dấu ?. trước cặp ngoặc () của phương thức
var user = {
  getName: function () {
    console.log("Hoàng An");
  },
}; //object

user?.getName?.();

var customers = { name: "hoàng an", email: "contact@unicode.vn" };
// var name = customers.name;
// var email = customers.email;
var { name: customerName, email } = customers; //destructuring
console.log(customerName, email);
