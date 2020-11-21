import {Observable} from './observable';

export class arraySubject extends Observable {
    constructor() {
        super();
        this.state = {
            value: []
        }
    }

    setState(nextState) {
        this.state = nextState;
        this.notify(this.state);
    }

    changeIndex(oldIndex, newIndex) {
        const {value} = this.state;
        let tmpArr = [];
        let tmpVal = this.state.value[oldIndex];
        this.state.value.forEach(element => tmpArr.push(element));
        tmpArr[oldIndex] = tmpArr[newIndex];
        tmpArr[newIndex] = tmpVal;
        this.setState({...this.state, value: tmpArr});
    }

    addItem(item) {
        const {value} = this.state;
        let tmpArr = [];
        this.state.value.forEach(element => tmpArr.push(element));
        tmpArr.push(item);
        this.setState({...this.state, value: tmpArr});
    }

    removeItem(item) {
        const {value} = this.state;
        let tmpArr = [];
        let tmpIndex = 0;
        this.state.value.forEach(element => tmpArr.push(element));
        for (let i in tmpArr) {
            if (tmpArr[i] === item) {
                tmpIndex = i;
                break;
            }
        }
        tmpArr.splice(tmpIndex, 1);
        this.setState({...this.state, value: tmpArr});
    }
}