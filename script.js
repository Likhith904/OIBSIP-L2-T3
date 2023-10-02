

const input = document.querySelector("#input-box");
const addBtn = document.querySelector("#btn");
const pending = document.querySelector(".pending");
const completed = document.querySelector(".completed");

addBtn.addEventListener("click", function (e) {
  addTask();
});

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (input.value === "") {
    alert("You must write something");
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    pending.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    input.value = "";
    saveProgress();
  }
}

pending.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName.toLowerCase() === "li") {
      toggleTaskStatus(e.target);
      saveProgress();
    } else if (e.target.tagName.toLowerCase() === "span") {
      e.target.parentElement.remove();
      saveProgress();
    }
  },
  false
);

completed.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName.toLowerCase() === "li") {
      toggleTaskStatus(e.target);
      saveProgress();
    } else if (e.target.tagName.toLowerCase() === "span") {
      e.target.parentElement.remove();
      saveProgress();
    }
  },
  false
);

function toggleTaskStatus(taskElement) {
  taskElement.classList.toggle("checked");
  if (taskElement.classList.contains("checked")) {
    completed.appendChild(taskElement);
  } else {
    pending.appendChild(taskElement);
  }
}

function saveProgress() {
  localStorage.setItem("pendingData", pending.innerHTML);
  localStorage.setItem("completedData", completed.innerHTML);
}

function getProgress() {
  pending.innerHTML = localStorage.getItem("pendingData");
  completed.innerHTML = localStorage.getItem("completedData");
}
getProgress();
