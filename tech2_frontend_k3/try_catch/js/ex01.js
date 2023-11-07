try {
  var a = 9;
  if (a >= 10) {
    console.log(a);
  } else {
    throw new Error("a phải từ 10");
  }
} catch (exception) {
  console.log(exception.message);
}

console.log("Hoàng An Unicode");
