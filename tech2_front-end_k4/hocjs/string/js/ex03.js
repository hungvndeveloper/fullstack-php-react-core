//Bài 1: Lấy username của email

var email = `hoangan.web@gmail.com`; //Lấy username

var position = email.indexOf("@");

var username = email.slice(0, position);

console.log(username);

//Bài 2: Cho trước họ và tên => Lấy các thông tin sau

//- Họ và tên đệm
//- Tên

var fullname = `Võ Văn Tuấn Anh`;

var position = fullname.lastIndexOf(" ", fullname);

var firstName = fullname.slice(position + 1);

var lastName = fullname.slice(0, position);

console.log(`
    Tên: ${firstName}
    Họ và đệm: ${lastName}
`);

//Bài 3: Đảo vị trí chữ đầu và cuối chuỗi

var str = `Tôi đang học Javascript`;

//=> Javascript đang học tôi

//=> Tách thành 3 đoạn: first, middle, last

var firstPosition = str.indexOf(" ");
var first = str.slice(0, firstPosition);

var lastPosition = str.lastIndexOf(" ");
var last = str.slice(lastPosition + 1);

var middle = str.slice(firstPosition, lastPosition + 1);

//str = last.concat(middle, first);

str = last + middle + first;

// str = str.slice(0, lastPosition + 1);

// str = str.replace(first, last);

// str = str.concat(first);

console.log(`Kết quả: ${str}`);
