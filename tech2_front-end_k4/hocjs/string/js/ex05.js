var customers = ["Tùng", "An", "Đạt", "Hoàng"];

var html = customers
  .map(function (customer, index) {
    return index === 0
      ? `<h3 style="color: red">${customer}</h3>`
      : `<h3>${customer}</h3>`;
  })
  .join("");

document.write(html);
