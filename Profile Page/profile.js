const realbutton = document.querySelector(".real-button");
const selectbutton = document.querySelector(".select-button");
const imageArea = document.querySelector(".upload-pic");

selectbutton.addEventListener("click", () => {
  realbutton.click();
});

realbutton.addEventListener("change", function () {
  const image = this.files[0];
  console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const imgUrl = reader.result;

    // Clear the existing content inside the upload-pic container
    imageArea.innerHTML = "";

    // Create and append the new image
    const img = document.createElement("img");
    img.src = imgUrl;
    img.style.width = "100px"; // Set image size as per the container
    img.style.height = "100px";
    img.style.borderRadius = "50%"; // To maintain the circular shape

    imageArea.appendChild(img);
    imageArea.classList.add("active");

    // Update the data attribute to reflect the new image name
    imageArea.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
