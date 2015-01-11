import View from './view';

class TodoItemView extends View {
    constructor(todoItem) {
        super(document.createElement("li"));
        this.todoItem = todoItem;
        this.render();
    }

    render() {
        if (!this.todoItem) {
            return;
        }
        this.element.innerHTML = this.todoItem.text;
    }
}

export default TodoItemView;
