const modalBtn = document.querySelector(".pd-modal-example");
const modalMiddle = document.querySelector(".pd-modal-example-middle");
const modalCloseBtn = document.querySelector(".pd-modal-example-close");
const modalBackBtn = document.querySelector(".pd-modal-example-back");

modalBtn.addEventListener("click", () => {
  modalMiddle.classList.add("pdm-active");
  document.body.style.overflow = "hidden";
});

modalCloseBtn.addEventListener("click", () => {
  modalMiddle.classList.remove("pdm-active");
  document.body.style.overflow = "visible";
});

modalBackBtn.addEventListener("click", () => {
  modalMiddle.classList.remove("pdm-active");
  document.body.style.overflow = "visible";
});
