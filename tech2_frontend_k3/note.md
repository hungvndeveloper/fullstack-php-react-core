- html - css
- bootstrap
- cắt psd

Thiếu:

- SCSS
- Javascript
- Dự án

Javascript

Quy tắc đặt tên:

1. camelCase: đặt tên biến, tên hàm

1.1: Biến
customerName
customerFirstName
customerLastName

1.2: Hàm
getName()
getCustomerName()

2. PascalCase: Dùng đặt tên Class

CustomerFirstName

class HomeController{

}

class OrderOverview{

}

3. undercore

- Đặt tên các thuộc tính của object
- Thiết kế API

Ví dụ: first_name, last_name, shipping_address, age,...

const customers = {
first_name: "Hoàng An",
last_name: "Tạ",
shipping_address: "Hà Nội",
age: 31
}

Định nghĩa hàm

Cú pháp:

function tenHam(){
//Nội dung hàm
}

Hàm sẽ chia thành các loại:

- Hàm có tham số
- Hàm không tham số
- Hàm có giá trị trả về (Hàm return)
- Hàm không có giá trị trả về (Hàm void)
- Hàm ẩn danh (Hàm không tên)

Khi làm việc với hàm, biến chia thành 2 loại:

- Biến toàn cục (global variable)
- Biến cục bộ (local variable)

Lưu ý với hàm return:

- Sau từ khóa return => Các đoạn code phía dưới sẽ không hoạt động

Hàm không tên, ẩn danh, anonymous function

- Gán vào 1 biến
- Kiểu dữ liệu sẽ trả về dạng function
- Định nghĩa hàm trước khi gọi

Vòng lặp

Đoạn chương trình được lặp lại theo 1 số lần xác định hoặc không xác định (Dựa vào biểu thức) để thực hiện 1 bài toán

1. Vòng lặp for: Lặp với số lần lặp xác định trước

- Vòng lặp for tăng
- Vòng lặp for giảm
- Vòng lặp lồng nhau

2. Vòng lặp while và do while: Lặp với số lần lặp không xác định trước

- while => Kiểm tra điều kiện trước sau đó thực hiện chương trình
- do while => Thực hiện chương trình trước rồi kiểm tra điều kiện

=> Ngoài ra: Các kiểu dữ liệu khác nhau sẽ có các vòng lặp khác nhau (Array)

# DOM

Các thao tác với DOM:

- Thay đổi nội dung các thẻ html
- Thêm nội dung vào thẻ html
- Xóa nội dung thẻ html
- Xóa thẻ html
- Thêm thẻ html
- Thay đổi thẻ html
- Thêm, sửa, xóa các thuộc tính thẻ html
- Chính sửa CSS (Inline) của thẻ html

## Dom Navigation

- Lên cấp cha: parentElement
- Xuống cấp con: chilren, node.querySelector() hoặc node.querySelectorAll()
- Next tới 1 element ngang hàng: nextElementSibling
- Prev 1 element ngang hàng: previousElementSibling

# API

- Giao tiếp giữa client vs server
- Hay còn gọi là ajax (Kỹ thuật, công nghệ) = Asynchronous JavaScript And XML

Khi sử dụng Javascript giao tiếp với Server bằng những cách nào?

- XmlHttpRequest() => Không trả về promise
- fetch() => Trả về 1 promise (ES6, dùng để xử lý bất đồng bộ)
- jquery ajax => thư viện
- axios => thư viện

Cấu tạo của API

- URL = Base Url + Endpoint + Params (http://localhost:3000/users?id=1&query=abc)
- Http Method:

* GET => Lấy dữ liệu từ server về
* POST => Đẩy dữ liệu từ client lên server (Thêm mới)
* PUT => Cập nhật dữ liệu từ client lên server (Sửa) => Ghi đè
* PATCH => Cập nhật dữ liệu từ client lên server (Sửa) => Chỉ cập nhật dữ liệu gửi lên
* DELETE => Xóa tài nguyên trên server

=> RESTFul API

- Headers

* Request Headers
* Response Headers

- Body (Data, Payload) => Chỉ tồn tại ở POST, PUT, PATCH

- Http Response Status

* Status Text
* Status Code

- Authorization (API Key, Bearer, OAuth 2.0,...)

* Headers
* Body

Lưu ý khi làm việc với API

- Kiểm tra server đã xử lý thành công hay chưa?

- Server xử lý thành công => Cập nhật UI

- Kiểm tra lỗi xảy ra khi làm việc với API

## Authentication vs Authorization

### Authentication

- Đăng nhập
- Đăng ký

### Authorization

- Phân quyền
- Cho phép làm gì

### Quy trình Authentication

1. Đăng nhập

- Gửi request => Server xác thực

* Chính xác => Tạo Token => Trả về cho client

* Không chính xác => Trả vè thông báo lỗi

- Client: Lưu token vào bất kì vị trí nào mong muốn? Cookie, Storage (session, local)

2. Đăng ký

- Gửi request => Server kiểm tra và thêm vào

- Server tạo token => Trả về client

- Client sử dụng token để auto đăng nhập

3. Đăng xuất

- Gửi request => Server xóa token => Trả về trạng thái

- Client xóa token ở trình duyệt: cookie, storage

4. Cập nhật tài khoản

4.1. Lấy thông tin tài khoản

- Call api `/profile` => gửi kèm token (header Authorization Bearer)
- Server trả về thông tin

* Xác thực đúng => trả về thông tin tk
* Xác thực sai => Thông báo lỗi

  4.2. Cập nhật thông tin tk

- Call api `/update-profile` để cập nhật

# ES6

# Npm

- Cài thư viện:

* Download toàn thư viện về máy => Copy vào folder project => Nhúng vào thông qua thẻ script
* Sử dụng CDN

Nhược điểm

- Quá trình cài đặt mất thời gian
- Khi chuyển đổi mã nguồn (git) => Đưa cả các thư viện lên => Bộ source rất nặng

Giải pháp:

Sử dụng mô hình quản lý thư viện bằng package

- Công cụ quản lý: npm, yarn, npx,...
- Market lưu trữ các thư viện:

* https://www.npmjs.com/
* https://yarnpkg.com/

Sử dụng các công cụ quản lý package qua dòng lệnh (Command Line Interface = CLI)
Học các câu lệnh DOS

Các bước:

- Cài công cụ quản lý: npm, yarn,...
- Tích hợp package vào trong project

=> Ghi nhớ

- Setup dự án
- Cài đặt package (global, local)
- Gỡ package
- Update package

# Webpack

- Cài đặt và tích hợp
- Hỗ trợ: import file js, thư viện trong node_modules
- Build ra static file

Hỗ trợ import:

- js (mặc định)
- image
- json
- css
- scss
- html
- typescript
