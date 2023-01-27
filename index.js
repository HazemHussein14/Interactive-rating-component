const mainPageSection = document.querySelector(".main-page");
const submittedSection = document.querySelector(".submited");
const ratingInputs = document.querySelectorAll(
  "input[name='support-feedback']"
);
const submitBtn = document.getElementById("SubmitBtn");
const userValueUI = document.getElementById("choosen-value");

submitBtn.addEventListener("click", () => {
  let ratingValue;
  let isChecked = false;
  ratingInputs.forEach((input) => {
    if (input.checked) {
      ratingValue = input.value;
      isChecked = true;
    }
  });
  if (isChecked === false) {
    alert("Please select a rating");
    return;
  }
  mainPageSection.style.display = "none";
  submittedSection.style.display = "block";
  userValueUI.innerHTML = `${ratingValue}`;
});
