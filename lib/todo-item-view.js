class TodoItemView {
    constructor(todoItem) {
        this.todoItem = todoItem;
    }

    render() {
        if (!this.todoItem) {
            return;
        }
        return `<li>${this.todoItem.text}</li>`;
    }
}


export default TodoItemView;
