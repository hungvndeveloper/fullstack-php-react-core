var action = "create";

switch (action) {
  case "add":
  case "create":
    console.log("Thêm khách hàng");
    break;

  case "edit":
  case "update":
    console.log("Sửa khách hàng");
    break;

  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa khách hàng");
    break;

  case "view":
  case "show":
  case "detail":
    console.log("Xem thông tin khách hàng");
    break;

  case 1:
    console.log("Test number");
    break;

  default:
    console.log("Xem danh sách khách hàng");
    break;
}
