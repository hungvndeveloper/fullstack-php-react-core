const email = "hoangan.web-@unicode.vn";

const pattern =
  /^[a-z]+[a-z0-9-_\.]{2,}@[a-z0-9]+([a-z0-9-_]*|\.[a-z]{2,})\.[a-z]{2,}$/;

const check = pattern.test(email);

console.log(check);
