const open = document.getElementById("open-modal");
const modal = document.getElementById("modal-container");
const close = document.getElementById("close-modal");

open.addEventListener("click", () => {
  modal.classList.add("show");
  document.body.style.overflow="hidden";

});
close.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow="unset";
});
