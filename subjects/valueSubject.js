import {Observable} from '../observable';

export class valueSubject extends Observable {
    constructor() {
        super();
        this.state = {
            value: undefined
        }
    }

    setState(nextState) {
        this.state = nextState;
        this.notify(this.state);
    }

    changeValue(newValue) {
        this.setState({...this.state, value: newValue});
    }
}