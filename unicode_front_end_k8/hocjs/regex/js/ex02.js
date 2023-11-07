//Cắt chuỗi

const content = `lorem ipsum dolor sit 0388875179 amet, consectetur adipiscing 01234567890 elit, sed do eiusmod tempor incidid`;

const pattern = /0[0-9]{9}/g; //g => global

const result = content.match(pattern);

console.log(result);

const email = "hoangan.web@unicode.com.vn";

const emailPattern =
  /^([a-z]+[a-z0-9-_\.]{2,})@([a-z0-9]+(?:[a-z0-9-_]*|\.[a-z]{2,})\.[a-z]{2,})$/;

const resultEmail = email.match(emailPattern);

console.log(resultEmail);

const html = `<img width="200" src="https://unicode.vn/image.png" alt="Anh 01" />`;

//=> Lấy link ảnh trong thuộc tính src

const patternImage = /<img.*src="(.+?)".*\/>/;

const link = html.match(patternImage);

console.log(link);
