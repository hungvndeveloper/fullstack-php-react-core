# Dự án web học online

## Các chức năng của web

- Hiển thị thông tin các khóa học
- Đăng ký/Đăng nhập
- Mua khóa học
- Xem bài giảng (Học online)
- Download tài liệu
- Hiển thị danh sách bài viết (Blog)
- Xem thông tin chi tiết bài viết
- Kích hoạt khóa học

## Cấu trúc thư mục - File

- Components: Global Components

* CourseItem: Component hiển thị thông tin 1 khóa học (Áp dụng cho trang danh sách khóa học: Trang chủ, chuyên mục)
* PageHeader: Component hiển thị breadcrumbs và title của từng trang

- Pages: Local Components (Component tương ứng với Route)

* Home: Component trang chủ
* Courses:
  ** ListCourses
  ** CourseCategory
  \*\* CourseDetail
* Lessions
* Blog
* Auth
* Account

- Layouts:

- Configs

- Services

# Những logic front-end KHÔNG được làm

- Phân trang (Giới hạn)
- Sắp xếp
- Logic login
- Filter
- Tạo danh sách ngẫu nhiên
