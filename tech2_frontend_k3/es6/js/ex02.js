const getMessage = () => ({
  name: "Hoàng An",
});

console.log(getMessage());

const getMessage2 = (msg) => msg;

console.log(getMessage2("ABC"));

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log(this);
});
