# Khóa học Front-End nền tảng

- HTML CSS
- SCSS (Ngôn ngữ tiền xử lý CSS)
- Cắt giao diện: PSD (Photoshop) => HTML - CSS, Figma => HTML CSS
- Bootstrap
- Javascript
- Project tổng hợp

## HTML

- Ngôn ngữ đánh dấu siêu văn bản
- Cấu tạo bởi các thẻ
- > 80 thẻ (Chỉ cần nhớ 10 đến 15 thẻ)

### Cấu trúc chung của 1 trang html

1. Cặp thẻ <head>

- Chứa thẻ title, meta, link css, link js
- Thẻ title => nội dung của thanh tiêu đề trên trình duyệt
- Thẻ <meta charset="UTF-8" /> => Hỗ trợ hiển thị nội dung Tiếng Việt

Cấu trúc của 1 thẻ meta

- <meta name="ten" content="nội dung" />

=> Thẻ html nằm trong head không hiển thị ra ngoài trang web

2. Cặp thẻ <body>

- Thể hiện nội dung của trang web

### Các loại thẻ html

1. Thẻ đủ và thẻ rỗng

- Thẻ đủ: Bao gồm cả mở thẻ và đóng thẻ

=> <p>Nội dung</p>

- Thẻ rỗng: Chỉ có mở thẻ
  => <img src="images/anh.jpg" />

Cấu trúc chung:

- <tenthe thuoctinh1 = "gia tri 1" thuoctinh2="gia tri 2">Noi dung</tenthe>
- <tenthe thuoctinh1 = "gia tri 1" thuoctinh2="gia tri 2" />

2. Thẻ inline và thẻ block

- Thẻ Inline

* Width bằng nội dung thẻ
* Các thẻ sẽ nằm cùng trên 1 dòng

- Thẻ block

* Width mặc định bằng 100%

* Mỗi thẻ sẽ nằm ở 1 dòng

Lưu ý: Trong tất cả các thẻ html luôn có 2 thuộc tính: id và class (Hỗ trợ CSS)

### Các thẻ html trong nhóm Block

- Thẻ <p> => Định dạng 1 đoạn văn bản

- Thẻ heading (h1 => h6) => Định dạng tiêu đề

- Thẻ div => Dùng định dạng khối (Chỉ có tác dụng nhóm các thẻ khác để hỗ trợ cho việc chia layout và sử dụng css)

- Định dạng danh sách:

* ul, li => Định dạng danh sách không sắp xếp
* ol, li => Định dạng danh sách có sắp xếp

Các thẻ html5

- header => Định dạng phần đầu trang
- footer => Định dạng phần chân trang
- aside => Định dạng phần cột bên (Sidebar)
- nav => Định dạng menu
- main => Định dạng phần body trang web
- section => Định dạng 1 section
- article => Định dạng 1 bài viết, sản phẩm,...
- time => Định dạng thời gian

Thẻ <hr /> => Tạo đường kẻ ngang

Thẻ <pre>

Thẻ <blockquote>

### Các thẻ trong nhóm Inline

1. Thẻ a => Chèn liên kết vào trang web

<a href="lien_ket" title="Tiêu đề" target="">Nội dung hiển thị</a>

- href => Liên kết cần chuyển đến
- title => Tiêu đề khi trỏ chuột
- target =>

* \_self hoặc không có gì => Mở ở tab hiện tại
* \_blank => mở tab mới

Đường dẫn tương đối (Relative Path): Path

Đường dẫn tuyệt đối (Absolute Path): Từ giao thức + tên miền + đường dẫn

2. Thẻ img => Chèn hình ảnh

<img src="duong_dan_anh" width="chieu_rong" height="chieu_cao" alt="Chú thích ảnh" title="Tiêu đề ảnh" />

Đường dẫn ảnh: bao gồm cả tương đối và tuyệt đối

Form (Biểu mẫu)

- 1 form sẽ có nhiều trường
- 1 form sẽ phải có button submit (Dùng để gửi dữ liệu lên Server)
- Thẻ tạo 1 form: dùng thẻ <form></form>

Field (Trường)

<input type="text" /> => Nhập liệu (Khác type)
<input type="email" /> => Nhập định dạng email

<button type="submit">Text</button> => Gửi dữ liệu từ form

Lưu ý khi làm việc với Form:

- Các thẻ form phải ngang hàng với nhau (Không được lồng thẻ form)
- Trong 1 trang web sẽ có nhiều form

## Chuyên đề CSS

### Khái niệm CSS

- CSS (Cascading Style Sheets): Dùng để định dạng trang web
- HTML chịu trách nhiệm hiển thị nội dung
- CSS chịu trách nhiệm định dạng, chia bố cục, màu sắc,...
- CSS không ngôn ngữ lập trình

### Các cách viết CSS

- Inline CSS: Viết trực tiếp CSS vào trong thẻ style của html

- Internal CSS: Viết CSS trong file html thông qua thẻ <style>

- External CSS: Viết CSS thông qua 1 file riêng (.css) và liên kết từ html tới file này bằng thẻ link:
  `<link rel="stylesheet" type="text/css" href="link_toi_file_css" />`

### Selector CSS (Bộ chọn)

- Nếu html đặt id => #tenid
- Nếu html đặt class => .tenclass
- Nếu muốn selector theo tên thẻ html => tenthe
- Phân cấp cha con (Không giới hạn cấp): selector1 selector2 selector3...
- Phân cấp liền kề (Cấp con gần nhất): selector1 > selector2 > selector3....
- Selector cùng cấp (Trong 1 thẻ html): selector1selector2... (Chọn càng chi tiết => ưu tiên càng cao)
- Selector các thẻ html ngang hàng với nhau (~)

Lưu ý:

- Các thẻ html phải ngang hàng và cùng nằm trong 1 cha
- Không bị giới hạn số cấp
- Nếu muốn selector cấp liền sau (Dùng dấu +)

- Chọn tất cả thành phần: `*`
- Chọn theo thuộc tính: tenthe[tenthuoctinh]

### Pseudo-elements

- before
- after
- first-letter
- first-line
- selection
- placeholder

### Pseudo Class

- hover => Trỏ chuột
- active => Click chuột và giữ
- focus => Con trỏ làm việc của trình duyệt
- checked => Trạng thái checked của input radio và input checkbox
- disabled => Trạng thái disabled các field
- first-child
- last-child

=> Lưu ý:

- Các item phải nằm trong 1 cha và ngang hàng với nhau
- Các item phải có selector giống nhau (Nếu bị xen ngang 1 selector khác => Sai)

* first-of-type
* last-of-type
* nth-child
* nth-of-type

### Thuộc tính định dạng text

1. Đơn vị:

- Đơn vị tuyệt đối

* px => pixels
* pt => points = 1.3 x px

- Đơn vị tương đối

* em => Tỷ lệ với thành phần cha gần nhất
* rem => Tỷ lệ với thành phần cao nhất (html selector)
* % => Tỷ lệ với thành phần cha gần nhất
* vh (viewport height) => Tỷ lệ theo chiều cao của viewport (Áp dụng với thuộc tính width, height)
* vw (viewport width) => Tỷ lệ theo chiều rộng của viewport (Áp dụng với thuộc tính width, height)

2. Giá trị mặc định

- inhertit => kế thừa theo thành phần cha gần nhất
- initial => Kế thừa theo mặc định trình duyệt
- unset => Loại bỏ giá trị của thuộc tính (Kế thừa theo thành phần cha gần nhất)

3. Màu sắc:

- Tên màu tiếng anh: blue, green, yellow,....
- Mã màu hexa: #efefef, #000000, #ffffff
- rgb
- hls
- color opacity: Độ mờ của màu sắc

4. Thuộc tính color:

- color: gia_tri_mau
- Thay đổi màu văn bản

5. Thuộc tính font-size

- font-size: value + unit
- Thay đổi cỡ chữ của văn bản

6. Thuộc tính font-family

- font-family: ten_font1, ten_font2,...
- Thay đổi font chữ của văn bản

Lưu ý:

- Nếu với các font chữ không có sẵn (Không phải các font mặc định của máy tính) thì cần phải nạp font vào trang web
- 2 font chữ mặc định: san-serif, serif
- Nếu font có chứa khoảng trắng => Đặt tên font vào trong dấu nháy kép

7. Thuộc tính font-weight

- font-weight: normal|bold|100|200|300|400|500|600|700|800|900
- Thay đổi độ đậm nhạt của chữ

8. Thuộc tính font-style

- font-style: normal|italic
- Thay đổi kiểu nghiêng của văn bản

9. Thuộc tính text-decoration

- text-decoration: none|underline|overline|line-through
- Thêm gạch ngang cho text

10. Thuộc tính text-transform

- text-transform: none|capitalize|lowercase|uppercase
- Thay đổi kiểu chữ: thường, hoa,...

11. Thuộc tính text-indent

- text-indent: value
- Thụt đầu dòng

12. Thuộc tính text-align

- text-align: left|center|right|justify
- Căn chỉnh vị trí text và các thẻ inline

13. letter-spacing

- letter-spacing: value
- Căn chỉnh khoảng cách giữa các ký tự

14. word-spacing

- word-spacing: value
- Căn chỉnh khoảng cách giữa các chữ

15. Thuộc tính word-wrap

- word-wrap: break-word
- Ngắn chữ để xuống dòng

### Thuộc tính background

- Thay đổi màu sắc, hình nền của 1 element
- Thuộc tính background sẽ có các thuộc tính mở rộng sau:

* background-color => Màu nền
* background-image => Hình nền
* background-position => Vị trí hình nền
* background-repeat => Lặp hình nền
* background-size: cover|contain|value|value1 value2
* background-attachment => Cố định hình nền
* background => Tổng hợp: color image position repeat attachment

### Thuộc tính border

- Thêm viền cho khối
- Áp dụng cho cả thẻ block và inline

Cú pháp: border: size style color

- size: Độ dày của viền
- style: kiểu (solid, dashed, dotted, double)

Thuộc tính đầy đủ:

- border-left: size style color
- border-right: size style color
- border-top: size style color
- border-bottom: size style color
- border-width: size
- border-left-width: size
- border-right-width: size
- border-top-width: size
- border-bottom-width: size
- border-style: style
- border-left-style: style
- border-right-style: style
- border-top-style: style
- border-bottm-style: style
- border-color: color
- border-left-color: color
- border-right-color: color
- border-top-color: color
- border-bottom-color: color

### Thuộc tính border-radius

- Bo góc khối
- Cú pháp:

* border-radius: size => Bo 4 góc
* border-radius: size1 size2 (size = top left = bottom right, size2 = bottom left = top right)
* border-radius: size1 size2 size3 (size1 = top left, size2 = bottom left = top right, size3 = bottom right)
* border-radius: size1 size2 size3 size4 (size1 = top left, size2 = top right, size3 = bottom left, size4 = bottom right)
* border-top-left-radius: size
* border-top-right-radius: size
* border-bottom-left-radius: size
* border-bottom-right-radius: size

Lưu ý: Nếu muốn tạo hình tròn

- border-radius: 50% (hoặc 100%)
- width = height

### Thuộc tính padding và margin

- Thuộc tính padding: Căn chỉnh khoảng cách giữa viền và nội dung (Khoảng cách bên trong)

- Thuộc tính margin: Căn chỉnh ngoài khối (Căn lề)

Cú pháp:

- margin: value => 4 cạnh
- margin: value1 value2 => value1 = top = bottom, value2 = left = right
- margin: value1 value2 value3 => value1 = top, value2 = left = right, value3 = bottom
- margin: value1 value2 value3 value4 => value1 = top, value2 = right, value3 = bottom, value4 = left

Thuộc tính padding tương tự

Lưu ý: Riêng thuộc tính margin => Có thêm giá trị auto

### Thuộc tính width và height

- Thiết lập chiều rộng và chiều cao
- Chỉ áp dụng với thẻ block
- Tìm hiểu 2 đơn vị mới: vh, vw
- Nếu dùng đơn vị % => Tỷ lệ với parent gần nhất

Thuộc tính liên quan

- min-width
- max-width
- min-height
- max-height

### Box Model

- Mô hình hộp trong CSS

### Thuộc tính overflow

- Xử lý khi nội dung bị tràn khung
- Khung bị tràn khi nội dung bên trong 1 element lớn hơn kích thước của thành phần cha
- Các hình thức xử lý

* Ẩn phần bị tràn
* Tạo thanh cuộn cho thành phần cha (scroll)

Cú pháp:
overflow: visible|hidden|auto|scroll

- visible: Mặc định
- hidden: Ẩn phần bị tràn
- auto: Hiển thị thanh cuộn nếu bị tràn
- scroll: Luôn hiển thị thanh cuộn (Kể cả không bị tràn)

Các thuộc tính mở rộng

- overflow-x
- overflow-y

### Thuộc tính opacity

- Làm mờ tất cả nội dung được chọn
- Bao gồm cả các thành phần con

### Thuộc tính display

- Thay đổi chế độ hiển thị của 1 element
- Cú pháp: display: none|block|inline-block|inline....

Ngoài ra: Thuộc tính display còn rất nhiều giá trị phức tạp

- flex
- grid
- table
- list-item

BÀI TẬP VỀ NHÀ

- Xây dựng menu dropdown
- Tìm hiểu về thuộc tính position

### Thuộc tính float

- Trôi 1 thành phần về bên trái hay bên phải của thành phần cha

- Cú pháp: float: none|left|right

### Thuộc tính clear

- Khắc chế tự động trôi của thuộc tính float

- Cú pháp: clear: left|right|both

Nguyên tắc khi làm việc với float

- Nên đặt trong 1 thẻ bọc
- Clearfix thẻ bọc: overflow: auto, after + clear

### Thuộc tính position

- Thay đổi vị trí các thành phần trong trang web
- Cú pháp: position: static|relative|absolute|fixed
- Thuộc tính mở rộng

* top => Cách top bao nhiêu?
* left => Cách left bao nhiêu?
* right => Cách right bao nhiêu?
* bottom => Cách bottom bao nhiêu?
* z-index => Xếp chồng các thành phần theo trục Z (Mắt nhìn thẳng vào màn hình) => Chỉ nhận số nguyên (âm và dương), mặc định = 0

position relative => Không làm thay đổi bố cục ban đầu của layout

position absolute =>

- Làm thay đổi bố cục ban đầu của layout (sắp xếp lại)
- Nhận body làm cha
- Khắc phục tình trạng này bằng cách thêm thuộc tính position relative vào thành phần cha => Thành phần nào có postion absolute sẽ bám theo thành phần có relative

position fixed

- Cố định khi scrolling
- Luôn nhận body làm cha

Nguyên tắc xếp chồng

- Thành phần html nằm sau => Luôn được chồng lên trước
- Thành phần có postion (trừ static) => Được chồng lên trước

### Bộ đếm trong CSS (Counter)

- counter-reset => Tạo bộ đếm mới
- counter-increment => Thực hiện đếm

### flexbox

#### Các thuộc tính trong nhóm Flex container

- display: flex|inline-flex => Kích hoạt flex

- flex-direction: Tùy chỉnh hướng (row|column|row-rereverse|column-reverse)

- flex-wrap => Kích hoạt wrap hoặc không (nowrap|wrap|wrap-rereverse)

- justify-content => Điều chỉnh các item theo trục chính (main axis) (flex-start|flex-end|center|space-between|space-around|space-evenly)

- align-items => Điều chỉnh các item theo trục vuông góc (cross axis)

- align-content

- gap: Tạo khoảng cách giữa các item

* gap: value => Cả 4 góc
* gap: value1 (hàng) value2 (cột)

#### Các thuộc tính trong nhóm flex item

- flex-grow: Tự động giãn để lấp đầy khoảng cách còn trống
- flex-shrink: Tự động co lại khi tổng width các item > container
- flex-basis: Thiết lập giá trị mặc định (width hoặc height)

* Bị chặn đầu bởi min-width
* Bị chặn cuối bởi max-width

Thuộc tính shadow

- box-shadow:
- text-shadow:

Thuộc tính transition

- Delay quá trình chuyển động của CSS
- Chỉ làm delay được các giá trị số

- transition-property: => Cần delay thuộc tính nào, mỗi thuộc cách nhau bởi dấu ,
- transition-duration: => Thiết lập thời gian hoàn thành chuyển động (s, ms)
- transition-timing-function: Thiết lập tốc độ
- transition-delay: Độ trễ trước khi thực hiện transition

Thuộc tính transform

- rotate(angle) => Xoay theo trục Z
- rotateX(angle) => Xoay theo trục X
- rotateY(angle) => Xoay theo trục Y
- scale(x, y) => Phóng to theo trục X và Y
- scaleX(x) => Phóng to theo trục X
- scaleY(y) => Phóng to theo trục Y
- skew(angleX, angleY) => Nghiêng theo trục X và Y
- skewX(x) => Nghiêng theo trục X
- skewY(y) => Nghiêng theo trục Y
- translate(x, y) => Dịch chuyển theo trục X, Y
- translateX(x) => Dịch chuyển theo trục X
- translateY(y) => Dịch chuyển theo trục Y

Sự khác nhau giữa translate và position relative

1. translate

- Nếu dùng đơn vị % => Tỷ lệ dựa vào size của đối tượng đang di chuyển

2. position relative

- Nếu dùng đơn vị % => Tỷ lệ dựa vào size của parent

=> Nếu dùng đơn vị tuyệt đối => Giống nhau

transform-origin: x y

x nhận các giá trị

- left
- right
- center
- Các giá trị tuyệt đối, phần trăm

y nhận các giá trị

- top
- center
- bottom
- Các giá trị tuyệt đối, phần trăm

## Background Gradient

- Linear => Hướng từ cạnh
- Radial => Hướng từ tâm

* circle
* ellipse

Phân chia mỗi đoạn thành 1 màu
Xác định được số lượng màu sẽ tồn tại trong background

## Responsive

- Dùng css để thay đổi kiểu hiển thị trên các màn hình khác nhau
- Dựa vào kích thước màn hình để thay đổi
- Dùng qua At-rules @media (Hay còn gọi là media query)

### BreakPoint

- Điểm chuyển màn hình khi làm việc với responsive
- Ví dụ:

0 -> 575 => Mobile
576 -> 767 => Ipad
769 -> 991 => Ipad Pro
992 -> 1399 => Máy tính nhỏ
1400 -> max => Máy tính lớn

- Không có breakpoint cố định trong tất cả các dự án

- Nên sử dụng các breakpoint phổ biến (Tham khảo các css framework)

* 576
* 768
* 992
* 1200
* 1400

### Các trường phái Responsive

- Moible first

* CSS mặc định sẽ là màn hình nhỏ nhất
* Các phần responsive => sẽ là các màn hình lớn hơn

- Desktop first

* CSS mặc định sẽ là màn hình lớn nhất

* Các phần responsive => sẽ là các màn hình nhỏ hơn

### Media Query

1. Mobile First

@media all and (min-width: 576px){

}

@media all and (min-width: 768px){

}

@media all and (min-width: 992px){

}

@media all and (min-width: 1200px){

}

@media all and (min-width: 1400px){

}

2. Desktop First

@media all and (max-width: 576px){

}

@media all and (max-width: 768px){

}

@media all and (max-width: 992px){

}

@media all and (max-width: 1200px){

}

Nguyên tắc khi làm việc với Responsive

- Ẩn/Hiện sử dụng display none và block
- Ghi đè: thêm !important phía sau giá trị của thuộc tính (display: block !important;)
- Nên dùng đơn vị tương đối: %, em, rem,...

Buổi sau: build grid system

## Grid System

Class: `col-{number}` => Áp dụng với màn hình nhỏ nhất

- col-1
- col-2
- col-3
- col-4
- col-5
- col-6
- col-7
- col-8
- col-9
- col-10
- col-11
- col-12

Class: `col-{breakpoint}-{number}`

{breakpoint}

- sm => Small => >=576px
- md => Medium => >=768px
- lg => Large => >=992px
- xl => Extra Large => 1200px
- xxl => Extra extra Large => 1400px

Công thức

- Xác định được flex-basic và max-width
- Công thức:

* col-1 => 100 / 12
* col-2 => `100 / 12 * 2`
* col-3 => `100 / 12 * 3`

=> col-{number} = `100 / 12 * {number}`

## Chống chéo css và độ ưu tiên

### Độ ưu trong CSS

0. important

1. Inline CSS

2. ID

3. Class

4. Tagname

### Phạm vi CSS

1. Tagname

2. Class

3. ID

4. Inline

=> Phạm vi càng rộng => Độ ưu tiên càng thấp

Lưu ý:

- Không lạm dụng !important
- Nên sử dụng các nguyên tắc ưu tiên

* id, class, tagname, inline
* Thứ tự viết code css (Code nằm dưới sẽ ưu tiên cao hơn)
* Selector càng chi tiết => Độ ưu tiên sẽ cao hơn
* Vị trí gọi file css sau => Ưu tiên cao hơn

## Kế thừa trong CSS

- Cách 1: Đặt nhiều class trong 1 element

* Những thành phần giống nhau, xuất hiện nhiều => Đặt riêng ra 1 class
* Những thành phần đặc biệt => Đặt thêm 1 class và css nó

- Cách 2: Đặt nhiều selector vào 1 khối (Cách nhau bởi dấu ,)

SCSS => Hỗ trợ mạnh về kế thừa

@extends, @mixin, @includes, @placeholder,...

## Quy tắc đặt tên BEM

- Xem video: https://www.youtube.com/watch?v=iMEVI3GXhn4

- Trang chủ: https://getbem.com

Về nhà

- Ôn lại bài học ngày hôm nay
- Hoàn thiện dự án: Push lên git và gửi lại link qua group

## Project PSD => HTML CSS

- Bản thiết kế: PSD, AI, XD, Figma,...
- Kỹ năng: Coding (html, css, javascript,...)
- Sử dụng các phần mềm: Lấy tài nguyên (ảnh, text,...), đo đạc (kích thước, font chữ, cỡ chữ, màu sắc,...)
- Học kỹ năng đo đạc và lấy tài nguyên của phần mềm
- UX, UI
- Luyện tập nhiều: Nâng cao phản xạ khi gặp phải giao diện, làm nhanh hơn
- Kỹ năng phân tích giao diện tổng quan

### Hướng dẫn sử dụng Photoshop

- Bật thước: Ctrl + R
- Chuyển đổi đơn vị: Ctrl + K => Unit & Ruler
- Đo đạc: Sử dụng công cụ (M) kết với Info (Windows => Info)

### Responsive khi Convert PSD => HTML CSS

- Nếu bản thiết kế có giao diện mobile => Làm giống
- Nếu bản thiết kế không có giao diện mobile => Tự nghĩ layout Responsive

## Javascript

### Chuỗi

Bao gồm các ký tự, đặt trong dấu nháy đơn, nháy kép, template string (``)

Để kiểm tra 1 chuỗi => Dùng từ khóa typeof tenbien === 'string'

Ép kiểu: Chuyển từ kiểu dữ liệu này thành kiểu dữ liệu khác

1. Primitive

- Kiểu dữ liệu nguyên thủy: undefined, boolean, number, string, bigint, symbol
- Cách gọi giống như object: tenbien.tenPhuongThuc() hoặc tenbien.tenthuoctinh

2. Object

- Kiểu dữ liệu đối tượng: object, array, function
- Cách gọi: tenbien.tenPhuongThuc() hoặc tenbien.tenthuoctinh

3. Function Constructor

- Function đặc biệt
- Dùng để tạo ra các object
- Gọi function constructor dùng từ khóa news: `tenbien = new TenFuncion()`
- Ví dụ: String, Array, Number,...

4. Prototype

- Xem danh sách các thuộc tính, phương thức của 1 function constructor (Được tạo bằng Prototype): `TenFunction.prototype`

5. Xử lý chuỗi

- Xử lý chuỗi cơ bản: Sử dụng các hàm có sẵn để thao tác với chuỗi

- Xử lý chuỗi nâng cao:

* Sử dụng các hàm
* Giải thuật, thuật toán, tư duy logic
* Sử dụng biểu thức chính quy (Regular Expression, Regex)

- Các phương thức / thuộc tính xử lý chuỗi

* length => Lấy độ dài của chuỗi
* at(index) => Lấy ký tự dựa vào index (index bắt đầu từ 0)
* charCodeAt(index) => Lấy ký tự dựa vào index => Chuyển mã ascii
* concat(string) => Nối chuỗi
* includes() => tìm kiểm chuỗi => Nếu tìm thấy trả về true, ngược lại trả về false
* indexOf() => Tìm kiểm chuỗi đầu tiên => Tìm thấy trả về index, ngược lại trả về -1
* lastIndexOf() => Tìm kiếm chuỗi cuối cùng => Tìm thấy trả về index, ngược lại trả về -1
* match() => Cắt chuỗi dựa vào biểu thức chính quy
* replace() => Thay thế chuỗi (Chuỗi cố định, Regex Pattern)
* replaceAll() => Thay thế tất cả chuỗi tìm được
* slice() => Cắt chuỗi con từ chuỗi cha dựa vào index
* split() => Chuyển từ chuỗi thành mảng
* toUpperCase() => Chuyển chữ thường thành chữ hoa
* toLowerCase() => Chuyển chữ hoa thành chữ thường
* trim() => Loại bỏ khoảng trắng đầu và cuối chuỗi

### Mảng (Array)

1. Tổng quan:

- Kiểu dữ liệu phức hợp: Tổng hợp các kiểu dữ liệu khác nhau vào trong 1 biến
- Quy định bởi: index và element
- Truy cập vào 1 phần tử của mảng: xác định được index

2. Khai báo mảng

`tenbien = []` hoặc `tenbien = new Array()`

- Khai báo 1 mảng rỗng: `tenbien = []`

- Khai báo mảng có dữ liệu: `tenbien = ["Value 1", "Value 2", "Value 3"]`

3. Áp dụng các phương thức xử lý mảng

- Thêm phần tử vào mảng
- Sửa phần tử trong mảng
- Xóa phần tử mảng
- Duyệt mảng

4. Các hàm xử lý mảng

- Array.isArray() => Kiểm tra kiểu dữ liệu mảng
- Array.from() => ép kiểu dữ liệu sang kiểu mảng
- at(index) => lấy phần tử mảng theo index
- concat(arr) => Nối nhiều mảng => Trả về 1 mảng
- includes(value) => tìm phần tử mảng => tìm thấy trả về true
- indexOf(value) => tìm phần tử đầu tiên => tìm thấy trả về index, không tìm thấy trả về -1
- lastIndexOf(value) => tìm phần tử cuối cùng => tìm thấy trả về index, không tìm thấy trả về -1
- join() => Nối các phần tử của mảng thành chuỗi
- slice(start, end) => Tách mảng con từ mảng cha dựa vào index (start tính từ 0, end tính từ 1)
- push() => Thêm phần tử vào cuối mảng và trả về số lượng sau khi thêm
- unshift() => Thêm phần tử vào đầu mảng và trả về số lượng sau khi thêm
- pop() => Xóa phần tử cuối cùng của mảng và trả về phần tử vừa xóa
- shift() => Xóa phần tử đầu tiên của mảng và trả về phần tử vừa xóa
- sort() => Sắp xếp theo thứ tự tăng dần (Trả về true, false)
- reverse() => Đảo ngược mảng

### Đối tượng (Object)

1. Object nguyên bản

var tenDoiTuong = {}

hoặc

var tenDoiTuong = new Object();

Thêm thuộc tính cho object (giống như biến)

=> Value không phải là function => Gọi là thuộc tính

Thêm phương thức cho object (giống như hàm)

=> Value là function => gọi là phương thức

Gọi key trong Object

tenObject.tenkey

Nếu key là thuộc tính => tenObject.key

Nếu key là phương thức => tenObject.key()

Để khắc phục tình trạng tham chiếu trong Array, Object => Clone object, array

2. Function Constructor

3. Các dạng object hay dùng

- Mảng lồng object
- Object lồng mảng
- Object lồng object

### DOM

1. Event

- Mỗi thẻ html sẽ có các sự kiện khác nhau
- Nhớ sự kiện hay dùng
- 3 cách thêm sự kiện cho thẻ html

* Cách 1: Thêm bằng thuộc tính html (tên sự kiện)
* Cách 2: Thêm bằng DOM (Dom Event)
* Cách 3: Thêm thông qua phương thức addEventListener()

=> Cách 2 và cách 3 phải tạo đối tượng html (DOM Element)

2. Dom Element

document.querySelector, document.querySelectorAll sẽ được dùng nhiều

- Hỗ trợ CSS Selector => Linh hoạt hơn
- Hỗ trợ việc phân cấp (Kế thừa tất cả mọi thứ trong CSS Selector)

Cách kiểm tra element

- Nếu là số ít: document.querySelector, document.getElementById => Kiểm tra !== null

- Nếu là số nhiều: Kiểm tra length > 0

3. Dom HTML

3.1. Làm việc với nội dung thẻ html

- Lấy nội dung
- Thay thế nội dung

Có các thuộc tính: innerText, innerHTML, outerText, outerHTML

3.2. Làm việc với thuộc tính
