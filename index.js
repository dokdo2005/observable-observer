// Reference : https://velog.io/@rolled-potatoes/%EC%98%B5%EC%A0%80%EB%B2%84-%ED%8C%A8%ED%84%B4-observer-pattern-with-JavaScript

import {valueObserver, arrayObserver, objectObserver} from './observers.js';

const obs1 = new valueObserver();
const obs2 = new arrayObserver();
const obs3 = new objectObserver();

obs1.changeValue(3);
obs1.changeValue(4);
obs1.changeValue(1);

obs2.addItem(10);
obs2.addItem(12);
obs2.changeIndex(0, 1);
obs2.removeItem(12);

obs3.addProperty("a", "Hello");
obs3.addProperty("b", "World");
obs3.changeValue("b", "Programming World!");
obs3.removeProperty("a");