/*
Cookie là gì? 
- Dữ liệu được lưu ở trình duyệt
- Có thời gian sống
- Trên 1 tên miền sẽ có nhiều cookie, các cookie ghép lại với nhau => Thành chuỗi cookie
Ví dụ: name1=value1; name2=value2
*/

//Thêm cookie
const expires = "2023-02-04 21:08:30";
const expiresUTC = new Date(expires).toUTCString();
console.log(expiresUTC);
// document.cookie = `email=hoangan.web@gmail.com; expires=${expiresUTC}`;
// document.cookie = `password=123456; expires=${expiresUTC}`;

//document.cookie = `password2=1234567; expires=${expiresUTC}`;

//document.cookie = `password=;expires=${new Date().toUTCString()}`;

console.log(document.cookie);

const getCookie = (name) => {
  if (document.cookie) {
    const cookieStr = document.cookie;
    const cookieArr = cookieStr.split("; ");

    const cookie = cookieArr.find((item) => {
      const itemArr = item.split("=");
      return itemArr[0] === name;
    });

    return cookie.split("=")[1];
  }
};

const email = getCookie("password");
console.log(email);

/*
Tác dụng của cookie
- Lưu thông tin phía người dùng
- Tăng trải nghiệm người dùng
- Cá nhân hóa
*/
