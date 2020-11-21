export class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers = [...this.observers, observer];
    }

    unsubscrive(observer) {
        this.observers = this.observers.filter(obs => observer !== obs);
    }

    notify(state) {
        this.observers.forEach(observer => observer(state));
    }
}