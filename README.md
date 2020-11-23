# Variable Observer

# 레퍼런스

[https://velog.io/@rolled-potatoes/옵저버-패턴-observer-pattern-with-JavaScript](https://velog.io/@rolled-potatoes/%EC%98%B5%EC%A0%80%EB%B2%84-%ED%8C%A8%ED%84%B4-observer-pattern-with-JavaScript)

# 사용법

```jsx
import {valueObserver, arrayObserver, objectObserver} from './observers.js';
```

이와 같이 옵저버 파일을 Import 한 후

```jsx
const obs1 = new valueObserver();
const obs2 = new arrayObserver();
const obs3 = new objectObserver();
```

필요한 옵저버를 각각 생성하여 사용하면 됩니다.

## valueObserver

첫째, String과 Number 타입의 변화를 추적하는 valueObserver에는 값을 변화시키는 changeValue 메소드가 존재합니다.

```jsx
obs1.changeValue(3);
```

매개변수로는 새로 변경 될 값이 들어가게 됩니다.

## arrayObserver

둘째, Array 타입의 변화를 추적하는 arrayObserver에는 3가지 메소드가 존재합니다.

- addItem

```jsx
obs2.addItem(10);
obs2.addItem(12);
```

Arrary에 값을 추가하는 메소드입니다. 매개변수로는 새로 추가할 값이 들어가며 배열의 가장 끝에 추가되게 됩니다.

- changeIndex

```jsx
obs2.changeIndex(0, 1);
```

인덱스 값을 바꾸는 메소드입니다. 매개변수로는 기존의 인덱스 값과 새로 바뀔 인덱스 값이 들어가게 됩니다.

- removeItem

```jsx
obs2.removeItem(10);
```

Array에서 값을 삭제하는 메소드입니다. 매개변수로는 삭제할 값이 들어가게 됩니다.

## objectObserver

셋째, Object 타입의 변화를 추적하는 objectObserver에는 3가지 메소드가 존재합니다.

- addProperty

```jsx
obs3.addProperty("a", "Hello");
obs3.addProperty("b", "World");
```

Object에 프로퍼티를 추가하는 메소드입니다. 매개변수로는 프로퍼티 값과 Value 값이 들어가게 됩니다.

- changeValue

```jsx
obs3.changeValue("b", "Programming World!");
```

프로퍼티의 Value 값을 변경하는 메소드입니다. 매개변수로는 프로퍼티 값과 변경 될 Value 값이 들어가게 됩니다.

- removeProperty

```jsx
obs3.removeProperty("a");
```

프로퍼티를 삭제하는 메소드입니다. 매개변수로는 삭제 할 프로퍼티의 값이 들어가게 됩니다.
