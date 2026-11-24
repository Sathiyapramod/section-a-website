// const loginBtn = document.getElementById("login-btn");

// loginBtn.addEventListener("click", () => {
//   // read my email entered
//   let email = document.getElementById("email");
//   // read my password entered
//   let password = document.getElementById("password");

//   email = email.value;
//   password = password.value;

//   let result = {
//     email: email,
//     password: password,
//   };

//   console.log(result);
// });

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("change", (event) => {
  console.log(event.target.value);
});
