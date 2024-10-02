// 1. let 과 const 의 차이점 이해하기
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 100);
    }
    // var : 함수 스코프를 가지므로 변수가 선언된 함수 내에서만 유효.
    // 루프가 끝난 후 `i`의 최종 값인 `3`이 모든 콜백에서 참조되므로, `setTimeout`의 콜백이 실행될 때마다 `3`이 출력

    
    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log(j), 100);
    }
    // let : 블록스코프를 가지므로 변수가 선언된 블록 내에서만 유효.
    // 각 반복에서 새로운 `j`변수가 생성되므로, 각 콜백이 해당 반복의 `j`값을 참조하게 되어 `0`,`1`,`2`가 순서대로 출력

// 2. 화살표 함수와 this 바인딩
    const person = {
        name: 'Alice',
        greet: () => {
            console.log(`Hello, ${this.name}!`);
        },
    };

    person.greet(); // Hello, undefined!
    // 화살표 함수는 자신만의 `this`를 가지지 않고, 외부 스코프의 `this`를 참조함. 
    // `greet`메서드가 정의된 위치의 외부 스코프는 전역스코프 이므로 `window`객체를 참조하게 되기 때문에 `name`이라는 속성이 정의 되어있지 않아 `undefined`반환.

// 3. 템플릿 리터럴로 문자열 조합하기
    const day = 'Monday';
    const weather = 'sunny';

    const message = `Today is ${day} and the weater is ${weather}.`;

    console.log(message);   // Today is Monday and the weater is sunny.

// 4. 객체 디스트럭처링 활용하기
    const user = {
        name2: 'Bob',
        age: 25,
        address: {
            city: 'New York',
            zip: '10001',
        },
    };

    // 객체 디스트럭처링
    const {name2,age,address:{city}} = user;

    console.log(name2);
    console.log(age);
    console.log(city);


// 5. 스프레드 연산자로 배열 합치기
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const arr3 = [...arr1, ...arr2];

    console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// 6. 클래스 상속과 메서드 오버라이딩
    class Animal {
        speak() {
            console.log('Animal sound');
        }
    }

    class Dog extends Animal {
        speak() {
            console.log('Woof!');
        }
    }

    const myDog = new Dog();
    myDog.speak();  // Woof!

// 7. 제너레이터를 이용한 이터러블 객체 생성 : 1에서 5까지 숫자를 순환하는 이터러블 객체 생성, for...of 루프로 출력하기
    function* numberGenerator() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    }

    (async () => {
        for await (const number of numberGenerator()) {
            console.log(number);
        }
    })();

// 8. 심볼을 이용한 객체의 비공개 프로퍼티
    const idSymbol = Symbol('id');

    const user2 = {
        name3: 'Alice',
        [idSymbol]: 12345
    };

    console.log(user2.id);   // undefined
    console.log(Object.keys(user2));   // [ 'name3' ]

// 9. 프록시를 이용한 속성 값 유효성 검사
    const target = {
        message : "aaaa"
    };

    const handler = {
        get: function (obj, prop) {
            if (typeof obj[prop] !== 'number') {
                return "Not a number";
            } else {
                return "number"
            }
        }
    };

    const proxy = new Proxy (target, handler);

    console.log(proxy.message); // Not a number

// 10. Promise와 async/await 비교
    async function fetchData() {
        try {
            const response = await fetch('http://api.example.com/data');
            const data = await response.json();

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    fetchData();

// 11. Array.prototype.includes()활용
    const numbers = [1, 3, 5, 7, 9];

    console.log(numbers.includes(7));

// 12. 객체의 Rest/Spread 프로퍼티
    const person1 = { name4: 'Eve', age: 28, city: 'Paris'};
    const {name4, ...details} = person1;

    console.log(details);   // { age: 28, city: 'Paris' }

// 13. Object.fromEntries()를 사용한 객체 생성
    const entries = [ 
        ['fruit', 'apple'], 
        ['color', 'red'], 
    ];

    const obj = Object.fromEntries(entries);

    console.log(obj);

// 14. Null 병합 연산자 (??) 사용하기
    let value = null ?? 'default';

    console.log(value);

// 15. 옵셔널 체이닝 (?.) 활용
    const order = {
        id: 1,
        // customer: { name: 'Frank'},
    };

    console.log(order?.customer?.name);

// 16. 동적 임포트를 이용한 모듈 로딩
    // math.js
    export function add(a, b) {
        return a + b;
    }

    import('./math.js')
        .then((module) => console.log(module))
        .catch((err) => console.log(err));

// 17. String.prototype.replaceAll() 사용하기
    const fruit = 'banana';
    const newFruit = fruit.replaceAll('a', 'o');

    console.log(newFruit);

// 18. Promise.any()를 이용한 빠른 응답 받기
    const p1 = new Promise ((resolve) => setTimeout(resolve, 300, '첫 번째'));
    const p2 = new Promise ((resolve) => setTimeout(resolve, 200, '두 번째'));
    const p3 = new Promise ((resolve) => setTimeout(resolve, 100, '세 번째'));

    Promise.any([p1, p2, p3])
        .then((value) => console.log(value))
        .catch((error) => console.log(error));

// 19. 클래스 필드 선언과 초기화
    class Car {
        brand = 'Toyota'
        color = 'Red';

        constructor(brand, color) {
            this.brand = brand;
            this.color = color;
        }
    }
    
// 20. Array.prototype.at() 메서드 활용
    const letters = ['x', 'y', 'z'];

    // console.log(letters[letters.length - 1]);
    console.log(letters.at(-1));