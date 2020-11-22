import {valueSubject} from './subjects/valueSubject.js';
import {arraySubject} from './subjects/arraySubject.js';
import {objectSubject} from './subjects/objectSubject.js';

export class valueObserver {
    constructor() {
        this.subject = new valueSubject();
        this.subject.subscribe(this.update.bind(this));
    }

    update(state) {
        const {value} = state;
        let valueElParent = document.querySelector("div");
        let valueEl = document.createElement("li");
        valueEl.innerText = `${typeof value}의 값이 변화하였습니다: ${value}`;
        valueElParent.appendChild(valueEl);
    }

    changeValue(newValue) {
        this.subject.changeValue(newValue);
    }
}

export class arrayObserver {
    constructor() {
        this.subject = new arraySubject();
        this.subject.subscribe(this.update.bind(this));
    }

    update(state) {
        const {value} = state;
        let arrayElParent = document.querySelector("div");
        let arrayEl = document.createElement("li");
        arrayEl.innerText = `Array가 변화하였습니다: ${value}`;
        arrayElParent.appendChild(arrayEl);
    }

    changeIndex(oldIndex, newIndex) {
        this.subject.changeIndex(oldIndex, newIndex);
    }

    addItem(item) {
        this.subject.addItem(item);
    }

    removeItem(item) {
        this.subject.removeItem(item);
    }
}

export class objectObserver {
    constructor() {
        this.subject = new objectSubject();
        this.subject.subscribe(this.update.bind(this));
    }

    update(state) {
        const {value} = state;
        let objectElParent = document.querySelector("div");
        let objectEl = document.createElement("li");
        objectEl.innerText = `Object가 변화하였습니다: ${JSON.stringify(value)}`;
        objectElParent.appendChild(objectEl);
    }

    changeValue(property, newValue) {
        this.subject.changeValue(property, newValue);
    }

    addProperty(newProperty, newValue) {
        this.subject.addProperty(newProperty, newValue);
    }

    removeProperty(deletedProperty) {
        this.subject.removeProperty(deletedProperty);
    }
}