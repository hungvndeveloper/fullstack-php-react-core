API = Application Programming Interface

=> Giao diện lập trình ứng dụng

Thành phần này giao tiếp với thành phần khác => API

Ví dụ:

- Gọi 1 hàm
- Front-End đọc dữ liệu từ Back-End
- Back-End đọc dữ liệu từ Back-End khác

Cần phải có

- Back-End (Fake)
- Các phương thức giao tiếp giữa Front-End và Back-End

* XMLHttpRequest
* fetch
* Thư viện: axois, jquery ajax,...

## Authentication - Authorization

- Authentication: Xác thực

* Đăng ký
* Đăng nhập
  => Cần phải có Back-End

Bên Client gửi Request lên Server (Email, Password) => Server xác thực => Token => Client sẽ lưu Token lại (Cookie, localStorage,...)

- Authorization: Phân quyền

Client sẽ gửi Request lên Server (Header chứa token) => Server kiểm tra xem token có hợp lệ không? Nếu hợp lệ trả về thông tin

- Cho phép được làm gì

Ví dụ: Muốn xem danh sách sản phẩm => Cần phải đăng nhập
