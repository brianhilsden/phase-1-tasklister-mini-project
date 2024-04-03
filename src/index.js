document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.forms[0];
  let new_task = form.elements.new_task_description;
  const tasksList = document.getElementById("tasks");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = document.createElement("li");
    task.textContent = new_task.value;
    tasksList.appendChild(task);
  });
});
