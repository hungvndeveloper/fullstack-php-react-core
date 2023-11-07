var getMessage = function (msg) {
  return "Hello World! - " + msg;
};

console.log(getMessage("Tech2"));

//callback function

//setTimeout, setInterval
//Đối tượng window

var handleRun = function (a, b) {
  console.log("Running - " + a + b);
};

var id = setTimeout(handleRun, 2000, "Tech2", "JS");

//id => Dùng để đưa vào hàm clearTimeout()

var getTotal = function (msg, ...args) {
  var total = args.reduce(function (a, b) {
    return a + b;
  }, 0);

  console.log(msg + total);
};

getTotal("Tổng = ", 5, 9, 10, 20, 30, 50, 100); //Tổng = 224

//Hàm setInterval() => Chạy lặp đi lặp lại theo 1 khoảng thời gian

// var count = 0;
// var intervalId = setInterval(function () {
//   console.log("Xin chào: " + ++count);
//   if (count === 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);
