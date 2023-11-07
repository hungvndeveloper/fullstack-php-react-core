const getHome = (a) => {
  //   function show() {
  //     console.log("Home Page");
  //   }

  //   show();

  return (b) => {
    console.log("Tổng: " + (a + b));
  };
};

/*
Khi định nghĩa 1 hàm => return về 1 hàm con => Closure
*/

const home = getHome(5);

home(3);
