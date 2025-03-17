const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList").getElementsByTagName("tbody")[0];

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const type = document.getElementById("type").value;

    const row = todoList.insertRow();
    const titleCell = row.insertCell(0);
    const startDateCell = row.insertCell(1);
    const endDateCell = row.insertCell(2);
    const typeCell = row.insertCell(3);

    titleCell.textContent = title;
    startDateCell.textContent = startDate;
    endDateCell.textContent = endDate;
    typeCell.textContent = type;

    todoForm.reset();
});
