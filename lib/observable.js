import observed from 'observed';

class Observable {
    constructor() {
        let emitter = observed(this);
        this.on = emitter.on.bind(emitter);
    }
}

export default Observable;
