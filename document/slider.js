const slider = document.querySelector(".slider");
const rangeValue = document.querySelector(".slider-range-value");

slider.addEventListener("change", () => {
  rangeValue.innerText = slider.value;
});
