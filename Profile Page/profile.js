const submitButton = document.querySelector(".picture-submit");
const realSubmit = document.querySelector("#file");

submitButton.addEventListener("click", () => {
  realSubmit.click();
});
