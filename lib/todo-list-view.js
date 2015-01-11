import TodoItemView from './todo-item-view';
import View from './view';

class TodoListView extends View {
    constructor(todoList, element) {
        super(element);
        this.todoList = todoList;
        this.todoList.on("change", this.render.bind(this));
        this.render();
    }

    addItem(item) {
        let itemView = new TodoItemView(item);
        element.appendChild(itemView.element);
    }

    /* Override */
    render() {
        console.log("Rendering todoList");
        this.element.innerHTML = "";
        let todoItems = this.todoList.todos.map(todoItem => new TodoItemView(todoItem));
        todoItems.forEach(item => this.element.appendChild(item.element));
    }
}

export default TodoListView;
