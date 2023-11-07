var getUsers = async function () {
  var response = await fetch(`https://43jf2n-8080.csb.app/customers`);
  if (response.ok) {
    var users = await response.json();
    console.log(users);
  }
};

// getUsers();

console.log(`=====================`);

var getUser = async function (id) {
  var response = await fetch(`https://43jf2n-8080.csb.app/customers/${id}`);
  if (response.ok) {
    var user = await response.json();
    console.log(user);
  }
};

getUser(3);
