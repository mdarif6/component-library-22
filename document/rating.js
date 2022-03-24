const ratingStars = document.querySelectorAll(".rating-form .star-input");
const ratingForm = document.querySelector(".rating-form");
const ratingOutput = document.querySelector(".rating-number-output");

ratingStars.forEach((element, index) => {
  element.addEventListener("change", () => checkingStars(index));
});

function checkingStars(index) {
  if (ratingStars[index].checked) {
    for (let j = index - 1; j >= 0; j--) {
      ratingStars[j].checked = true;
    }
  } else {
    for (let j = index + 1; j < ratingStars.length; j++) {
      ratingStars[j].checked = false;
    }
  }
}

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let sum = 0;
  ratingStars.forEach((star) => {
    if (star.checked) sum += 1;
  });
  ratingOutput.innerText = `You have given ${sum} rating`;
});
