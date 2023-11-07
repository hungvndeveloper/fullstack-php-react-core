//Tính tổng không sử dụng vòng lặp
//S = 1 + 2 + 3 + .. +N

function getTotal(n) {
  if (n > 1) {
    n += getTotal(n - 1);
  }

  return n;
}

var total = getTotal(10);

console.log(`Tổng = ${total}`);

function fibonaci(n) {
  //   if (n == 1 || n == 2) {
  //     return 1;
  //   }

  if (n == 0 || n == 1) {
    return n;
  }

  return fibonaci(n - 1) + fibonaci(n - 2);
}

//fibonaci(5) = fibonaci(4) + fibonaci(3)
//            =  fibonaci(3) + fibonaci(2) +  fibonaci(2) + fibonaci(1)

//fibonaci(2) + fibonaci(1) +  fibonaci(1) +  fibonaci(0) + fibonaci(1) +  fibonaci(0) + 1

//fibonaci(1) + fibonaci(0) + 1 + 1 + 0 + 1 + 0 + 1

//1 + 0 + 4 = 5

var menus = [
  {
    id: 1,
    title: "Item 1",
  },

  {
    id: 2,
    title: "Item 2",
    children: [
      {
        id: 3,
        title: "Item 2.1",
      },

      {
        id: 4,
        title: "Item 2.2",
        children: [
          {
            id: 6,
            title: "Item 2.2.1",
          },
          {
            id: 7,
            title: "Item 2.2.2",
          },
        ],
      },

      {
        id: 5,
        title: "Item 2.3",
      },
    ],
  },
];

console.log(menus);

//unicode.vn/kinh-doanh/tai-chinh/ngan-hang/ngan-hang-tang-lai-suat
