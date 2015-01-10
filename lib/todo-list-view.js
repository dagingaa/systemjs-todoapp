import TodoItemView from './todo-item-view';

class TodoListView {
    constructor(todoList) {
        this.todoList = todoList;
    }

    render() {
        console.log("Rendering todoList");
        let todos = this.todoList.getTodos();
        let todoItemElements = todos.map((todoItem) => {
            return new TodoItemView(todoItem).render();
        });
        return `<ul>${todoItemElements.join("")}</ul>`;
    }
}

export default TodoListView;
