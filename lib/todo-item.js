import Observable from './observable';

class TodoItem extends Observable {
    constructor(text) {
        super();
        this.text = text;
        this.completed = false;
    }
}

export default TodoItem;
