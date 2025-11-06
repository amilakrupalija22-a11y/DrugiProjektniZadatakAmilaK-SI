// ===================== TO-DO LISTA =====================
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

if (taskForm) { // provjera da li element postoji na stranici
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!taskInput.value.trim()) {
      taskInput.classList.add("is-invalid");
      return;
    }
    taskInput.classList.remove("is-invalid");
    addTask(taskInput.value);
    taskInput.value = "";
  });

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
    li.style.animation = "fadeIn 0.4s forwards";
    li.querySelector(".complete-btn").addEventListener("click", () => {
      li.querySelector(".task-text").classList.toggle("completed");
    });
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.classList.add("fade-out");
      setTimeout(() => li.remove(), 300);
    });
    taskList.appendChild(li);
  }
}

// ===================== BILJEŠKE =====================
const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");
const noteList = document.getElementById("noteList");

if (noteForm) { // provjera da li element postoji na stranici
  noteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!noteInput.value.trim()) {
      noteInput.classList.add("is-invalid");
      return;
    }
    noteInput.classList.remove("is-invalid");
    addNote(noteInput.value);
    noteInput.value = "";
  });

  function addNote(text) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
      <span>${text}</span>
      <button class="btn btn-sm btn-outline-danger">✖</button>
    `;
    li.querySelector("button").addEventListener("click", () => {
      li.classList.add("fade-out");
      setTimeout(() => li.remove(), 300);
    });
    noteList.appendChild(li);
  }
}

// ===================== KONTAKT FORMA =====================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Molimo popunite sva polja!");
      return;
    }

    // Simulacija slanja forme
    alert(`Hvala, ${name}! Vaša poruka je poslana.`);
    contactForm.reset();
  });
}
