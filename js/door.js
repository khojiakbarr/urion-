const dors = document.querySelectorAll(".door-images");
const doorModal = document.querySelector(".door-modal");

dors.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("door-open");
    setTimeout(openModal, 400);
  });
});

function openModal() {
  doorModal.classList.toggle("open-door-modal");
}

function closeModal() {
  doorModal.classList.toggle("open-door-modal");
  dors.forEach((el) => {
    el.classList.remove("door-open");
  });
}
