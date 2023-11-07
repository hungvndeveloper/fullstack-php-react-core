var search = new URLSearchParams(window.location.search);

var id = search.get("id");

if (id) {
  fetch(`https://43jf2n-8080.csb.app/customers/${id}`, {
    method: "DELETE",
  }).then(function (response) {
    console.log(response);
  });
}
