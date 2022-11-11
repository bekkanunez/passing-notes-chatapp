// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector("#login-email").value.trim();
//   const password = document.querySelector("#login-pwd").value.trim();

//   if (email && password) {
//     const response = await fetch("/home-routes/messages", {
//       method: "POST",
//       body: JSON.stringify({ email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to log in.");
//     }
//   }
// };

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector("#create-email").value.trim();
//   const password = document.querySelector("#create-pwd").value.trim();

//   if (email && password) {
//     const response = await fetch("/home-routes/messages", {
//       method: "POST",
//       body: JSON.stringify({ email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to sign up.");
//     }
//   }
// };

// document
//   .querySelector("#login-btn")
//   .addEventListener("click", loginFormHandler);

// document
//   .querySelector("#create-btn")
//   .addEventListener("click", signupFormHandler);
