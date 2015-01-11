import TodoItem from './todo-item';
import Observable from './observable';

class TodoList extends Observable {
    constructor() {
        super();
        this.todos = [];
    }

    addTodo(text) {
        this.todos.push(new TodoItem(text));
    }

}

export default TodoList;
