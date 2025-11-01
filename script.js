// DOM elementi
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Slušalac događaja za dodavanje zadatka
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validacija
  if (!taskInput.value.trim()) {
    taskInput.classList.add("is-invalid");
    return;
  }

  taskInput.classList.remove("is-invalid");
  addTask(taskInput.value);
  taskInput.value = "";
});

// Funkcija za dodavanje zadatka u listu
function addTask(taskText) {
  const li = document.createElement("li");
  li.className = "list-group-item";

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="btn btn-sm btn-outline-success me-2 complete-btn">✔</button>
      <button class="btn btn-sm btn-outline-danger delete-btn">✖</button>
    </div>
  `;

  // Osluškivanje dugmadi
  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.querySelector(".task-text").classList.toggle("completed");
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 300);
  });

  taskList.appendChild(li);
}

