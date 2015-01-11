import TodoList from './todo-list';
import TodoListView from './todo-list-view';

class TodoApp {
    constructor() {
        console.log("Bootstrapping TodoApp");
        this.todoList = new TodoList();
        this.todoListView = new TodoListView(this.todoList, document.getElementById("todo-list"));
        this.bootstrap();
        console.log("Bootstrapping complete");
    }

    bootstrap() {
        let todoItemFormElement = document.getElementById("todo-item-form-element");
        todoItemFormElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.addTodo();
        }, false);
    }

    addTodo() {
        let todoItemInputElement = document.getElementById("todo-item-input-element");
        this.todoList.addTodo(todoItemInputElement.value);
        todoItemInputElement.value = "";
    }

}

export default new TodoApp();
