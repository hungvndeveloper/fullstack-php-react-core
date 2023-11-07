//Để giữa các nền tảng có thể giao tiếp được dữ liệu với nhau

//Cần phải có định dạng chung: xml, json

/*
Ví dụ: 
- Web viết bằng PHP
=> Viết API: Convert array php => json => Trả về 1 định dạng chuỗi (xml, json)

- App viết bằng Java
=> Đọc API từ web => Convert chuỗi thành Array của Java
*/

var users = [
  {
    id: 1,
    name: "Hoàng An",
  },
  {
    id: 2,
    name: "Văn Tuấn",
  },
];

var json = JSON.stringify(users); //convert object, array => json

console.log(json);

var arr = JSON.parse(json); //convert json => object, array

console.log(arr);
