class View {
    constructor(element) {
        this.element = element;
    }

    render() {
        // noop
    }

    remove() {
        let parent = this.element.parentNode;
        if (!parent) {
            return;
        }

        parent.removeChild(this.element);
    }
}

export default View;
