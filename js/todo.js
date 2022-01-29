const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input")

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    //json.stringify chuyển đối tượng, giá trị thành một chuỗi json
    localStorage.setItem("todos", JSON.stringify(toDos));

}

function deleteTodo(event) {
    //target dùng để tìm ra thẻ đã click
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // loại bỏ id công việc đã chọn
    saveTodos(); //gọi hàm này lại vì cần kiểm tra todos nào còn lưu
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    li.appendChild(span);
    toDoList.appendChild(li);
    span.innerText = newTodo.text;
    
    const button = document.createElement("button");
    li.appendChild(button);
    button.innerText = "❌";
    button.style.marginLeft = "20px";
    button.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
    const parsedTodos = JSON.parse(saveToDos); // chuyển chuỗi json thành mảng javascript
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}