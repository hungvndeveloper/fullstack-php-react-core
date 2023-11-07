if (Storage !== undefined) {
  /*
    sessionStorage: Chỉ hoạt động trong phiên
    localStorage: Lưu vĩnh viễn
    */
  //Thêm dữ liệu
  //localStorage.setItem("email", "hoangan.web@gmail.com");
  //localStorage.username = "hoangan.web@gmail.com";
  //Cập nhật dữ liệu
  //localStorage.setItem("email", "hoanganit19@gmail.com");
  //localStorage.username = "hoanganit19";
  //Hiển thị
  //console.log(localStorage.getItem("email"));
  //Xóa
  //localStorage.removeItem("email");
  //xóa tất cả
  //localStorage.clear();
} else {
  console.log("Trình duyệt không hỗ trợ Storage");
}

/*
Lưu ý khi lưu trữ localStorage, sessionStorage, cookie
- Không lưu các thông tin nhạy cảm: đăng nhập, mật khẩu, ngân hàng,...
- Chỉ chấp nhận dạng chuỗi
- Nếu kiểu dữ liệu phức tạp => Chuyển thành json để lưu trữ
*/

const customers = [
  {
    id: 1,
    name: "Nguyễn Văn",
  },

  {
    id: 2,
    name: "Nguyễn Văn B",
  },
];

localStorage.setItem("customers", JSON.stringify(customers));

const data = localStorage.getItem("customers");
const dataArr = JSON.parse(data);
console.log(dataArr);

console.log(navigator);
