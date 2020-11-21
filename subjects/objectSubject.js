import {Observable} from '../observable';

export class objectSubject extends Observable {
    constructor() {
        super();
        this.state = {
            value: {}
        }
    }

    setState(nextState) {
        this.state = nextState;
        this.notify(this.state);
    }

    changeValue(property, newValue) {
        const {value} = this.state;
        let tmpObj = {};
        Object.assign(tmpObj, value);
        for (let i in tmpObj) {
            if (i === property) {
                tmpObj[property] = newValue;
                break;
            }
        }
        this.setState({...this.state, value: tmpObj});
    }

    addProperty(newProperty, newValue) {
        const {value} = this.state;
        let tmpObj = {};
        Object.assign(tmpObj, value);
        tmpObj[newProperty] = newValue;
        this.setState({...this.state, value: tmpObj});
    }

    removeProperty(deletedProperty) {
        const {value} = this.state;
        let tmpObj = {};
        Object.assign(tmpObj, value);
        delete tmpObj[deletedProperty];
        this.setState({...this.state, value: tmpObj});
    }
}