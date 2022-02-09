const open = document.getElementById("open-modal");
const modal = document.getElementById("modal-container");
const close = document.getElementById("close-modal");
console.log(modal)
open.addEventListener("click", () => {
  modal.classList.add("show");
});
close.addEventListener("click", () => {
  modal.classList.remove("show");
});
