const openbtn = document.querySelector(".modal-open-button");
const closebtn = document.querySelector(".modal-close-button");
const modal = document.querySelector(".modal-overlay");

openbtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closebtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
 