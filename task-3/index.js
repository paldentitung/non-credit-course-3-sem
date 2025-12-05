//variables

const addTaskBtn = document.getElementById("add-button");
const userInput = document.getElementById("user-input");
const todolist = document.querySelector(".todo-list");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalCloseBtn = document.querySelector(".modal-close-btn");
console.log(modal);

//add task logic
addTaskBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  let deleteBtn = document.createElement("button");

  let nodeText = document.createTextNode(userInput.value);
  if (userInput.value === "") {
    alert("enter the task");
    return;
  }

  userInput.value = "";
  deleteBtn.innerHTML = "Delete";

  li.appendChild(nodeText);
  li.appendChild(deleteBtn);
  todolist.appendChild(li);

  deleteBtn.addEventListener("click", () => {
    modal.classList.add("active");

    //creating elements
    let cancelBtn = document.createElement("button");
    let deletebutton = document.createElement("button");
    let div = document.createElement("div");
    let buttonDiv = document.createElement("div");
    let span = document.createElement("span");

    span.textContent = "Are you sure?";
    cancelBtn.innerHTML = "Cancel";
    deletebutton.innerHTML = "Delete";

    buttonDiv.appendChild(cancelBtn);
    buttonDiv.appendChild(deletebutton);
    div.appendChild(span);
    div.appendChild(buttonDiv);

    div.classList.add("actions-div");
    buttonDiv.style.display = "flex";
    buttonDiv.style.gap = "10px";
    modalContent.innerHTML = "";
    modalContent.appendChild(div);

    cancelBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
    deletebutton.addEventListener("click", () => {
      todolist.removeChild(li);
      modal.classList.remove("active");
    });
  });
});

//modal logic
modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
