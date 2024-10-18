const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const loginSign = document.querySelector(".sign-in-form");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

loginSign.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "http://127.0.0.1:5500/Profile%20Page/profile.html";
  console.log("Clicked");
});
