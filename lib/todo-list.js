import TodoItem from './todo-item';

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(text) {
        this.todos.push(new TodoItem(text));
    }

    getTodos() {
        return this.todos;
    }
}

export default TodoList;
