// Reference : https://velog.io/@rolled-potatoes/%EC%98%B5%EC%A0%80%EB%B2%84-%ED%8C%A8%ED%84%B4-observer-pattern-with-JavaScript

import {valueSubject} from './subjects/valueSubject';
import {arraySubject} from './subjects/arraySubject';
import {objectSubject} from './subjects/objectSubject';

export class valueObserver {
    constructor() {
        super();
        this.subject = new valueSubject();
        this.subject.subscribe(this.update.bind(this));
    }

    update(state) {
        const {value} = state;
        console.log(`${typeof value}의 값이 변화하였습니다: ${value}`);
    }

    changeValue(newValue) {
        this.subject.changeValue(newValue);
    }
}

export class arrayObserver {
    constructor() {
        super();
        this.subject = new arraySubject();
        this.subject.subscribe(this.update.bind(this));
    }

    update(state) {
        const {value} = state;
        console.log(`Array가 변화하였습니다: ${value}`);
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
        super();
        this.subject = new objectSubject();
        this.subject.subscribe(this.update.bind(this));
    }

    update(state) {
        const {value} = state;
        console.log(`Object가 변화하였습니다: ${value}`);
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