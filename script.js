const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButton = document.querySelector(".close-modal");

const showModal = () => {
  signupModal.style.display = "block";
};

const closeModal = () => {
  signupModal.style.display = "none";
};

signup.addEventListener("click", () => {
  showModal();
});

closeButton.addEventListener("click", () => {
  closeModal();
});

window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModal();
  }
});
