const burgerMenuBtn = document.querySelector("#burger-menu");
const burgMenu = document.querySelector(".pd-asidebar");

burgerMenuBtn.addEventListener("click", function () {
  if (burgerMenuBtn.classList.contains("fa-bars")) {
    burgerMenuBtn.classList.remove("fa-bars");
    burgerMenuBtn.classList.add("fa-times");
    burgMenu.style.display = "block";
  } else {
    burgerMenuBtn.classList.remove("fa-times");
    burgerMenuBtn.classList.add("fa-bars");
    burgMenu.style.display = "none";
  }
});
