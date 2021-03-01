// person.js
class Person {
  name: string;
  constructor(name: string) {
    // 클래스 프로퍼티의 선언과 초기화
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

class Person2 {
  constructor(private name: string) {
    // 클래스 프로퍼티의 선언과 초기화
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

console.log('hihihihi!!!!');

// 타입 변환 방법, 변수 선언식에도 타입을 지정하기 보다는 값에 대한 타입으로 변수의 타입을 지정해 주는 것이 낫다.
const $foo = document.querySelector('input[text]') as HTMLInputElement;
const val = $foo.value;

const $bar = <HTMLInputElement>document.querySelector('input[text]');
const va = $bar.value;


// 앨리어스
type TodoType = {
  id: number
  content: string
  completed: boolean
}

// 인터페이스
interface Todo {
  id: number
  content: string
  completed: boolean
}

// const todos: Todo[] = [
//   {id: 1, content: 'HTML', completed: false}
// ];

// const addTodo = (todo: Todo) => {
//   todos = [...todos, todo];
// };

// 제네릭 형식
const todos: Array<Todo> = [
  {id: 1, content: 'HTML', completed: false}
];

const addTodo = (todo: Todo) => {
  todos = [...todos, todo];
};