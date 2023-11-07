//hàm setTimeout() => Delay 1 đoạn chương trình

// setTimeout(function () {
//   console.log("Unicode");
// }, 3000);

// var step1 = () => {
//   setTimeout(() => {
//     console.log("Step 1");
//   }, 1000);
// };

// var step2 = () => {
//   console.log("Step 2");
// };

// step1();
// step2();

var handle = (callback, ...args) => {
  setTimeout(() => {
    console.log("Step 1");
    callback(...args);
  }, 3000);
};

var step2 = (a, b) => {
  console.log("Step 2", a, b);
};

handle(step2, "A", "B");
