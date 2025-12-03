//varibales declare

const userName = document.getElementById("user-name");
const password = document.getElementById("user-password");
const form = document.querySelector(".form");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalCloseBtn = document.querySelector(".modal-close-btn");
let passwordIcon = document.querySelector(".password-icon");
let cancelBtn = document.createElement("button");
let SubmitBtn = document.createElement("button");

// adding the form event

form.addEventListener("submit", (e) => {
  e.preventDefault();

  modalContent.innerHTML = "";
  // validation for empty name n password
  if (!userName.value || !password.value) {
    modal.classList.add("active");
    modalContent.textContent = "Enter the Valid info";
    return;
  }
  if (password.value.length < 6) {
    modal.classList.add("active");
    modalContent.textContent = "";
    modalContent.textContent = "Enter a strong password";
    return;
  }
  if (userName.value.length < 3) {
    modal.classList.add("active");
    modalContent.textContent = "";
    modalContent.textContent = "Enter a Valid username";
    return;
  }
  modal.classList.add("active");
  modalContent.textContent = "Are you sure?";
  // creating element for showing  name n password
  /*
  note "donot show password "
  */
  let div = document.createElement("div");
  cancelBtn.innerHTML = "Cancel";
  SubmitBtn.innerHTML = "Submit";
  // submit button after modal pop up
  SubmitBtn.addEventListener("click", () => {
    modal.classList.add("active");
    modalContent.innerHTML = "";

    let nameSpan = document.createElement("span");
    let passwordSpan = document.createElement("span");
    let div = document.createElement("div");

    nameSpan.textContent = `Username : ${userName.value}`;
    passwordSpan.textContent = `Password : ${password.value}`;
    div.style.display = "flex";
    div.style.flexDirection = "column";

    div.appendChild(nameSpan);
    div.appendChild(passwordSpan);
    modalContent.appendChild(div);

    userName.value = "";
    password.value = "";
  });
  //   cancel button
  cancelBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  div.appendChild(cancelBtn);
  div.appendChild(SubmitBtn);
  modalContent.appendChild(div);
});

// password
passwordIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    passwordIcon.src = "hide.png";
  } else {
    password.type = "password";
    passwordIcon.src = "view.png";
  }
});

// modal close button
modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
