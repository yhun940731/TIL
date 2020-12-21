// 1. html 생성
// forEach 활용
const todos = [{
    id: 3,
    content: 'HTML',
    completed: false
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 1,
    content: 'Javascript',
    completed: false
  }
];

function render() {
  let html = '';

  todos.forEach(todo => {
    html += `<li id = "${todo.id}">
  <label><input type ="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}</label>
</li>\n`;
  });

  return html;
}

console.log(render());

// map 활용
function render() {

  return todos.map(todo => {
    return `<li id = "${todo.id}">
  <label><input type ="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}</label>
</li>\n`;
  }).join('');
}

console.log(render());

/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/

// 2. 특정 프로퍼티 값 추출
const todos = [{
    id: 3,
    content: 'HTML',
    completed: false
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 1,
    content: 'Javascript',
    completed: false
  }
];

function getValues(key) {
  return todos.map(todo => todo[key]);
}

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues('completed')); // [false, true, false]

// 3. 프로퍼티 정렬
const todos = [{
    id: 3,
    content: 'HTML',
    completed: false
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 1,
    content: 'Javascript',
    completed: false
  }
];

// 함수 선언문 활용
// function sortBy(key) {
//   const _todos = [...todos];
//   return _todos.sort((todo1, todo2) => todo1[key] > todo2[key] ? 1 : (todo1[key] < todo2[key] ? -1 : 0));
// }

// 화살표 함수 활용
const sortBy = key => {
  const _todos = [...todos];
  return (_todos.sort((todo1, todo2) => todo1[key] > todo2[key] ? 1 : (todo1[key] < todo2[key] ? -1 : 0)));
};

console.log(sortBy('id'));
/*
[
{ id: 1, content: 'Javascript', completed: false },
{ id: 2, content: 'CSS', completed: true },
{ id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy('content'));
/*
[
{ id: 2, content: 'CSS', completed: true },
{ id: 3, content: 'HTML', completed: false },
{ id: 1, content: 'Javascript', completed: false }
]
*/
console.log(sortBy('completed'));
/*
[
{ id: 3, content: 'HTML', completed: false },
{ id: 1, content: 'Javascript', completed: false },
{ id: 2, content: 'CSS', completed: true }
]
*/

// 4. 새로운 요소 추가
let todos = [{
    id: 3,
    content: 'HTML',
    completed: false
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 1,
    content: 'Javascript',
    completed: false
  }
];

function addTodo(newTodo) {
  todos = [newTodo].concat(todos);
}

// 스프레드 문법 사용
function addTodo(newTodo) {
  todos = [newTodo, ...todos];
}

addTodo({
  id: 4,
  content: 'Test',
  completed: false
});

console.log(todos);
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/

// 5. 특정 요소 삭제
let todos = [{
    id: 3,
    content: 'HTML',
    completed: false
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 1,
    content: 'Javascript',
    completed: false
  }
];

// function removeTodo(id) {
//   todos = todos.filter(todo => todo.id !== id)
// }

//화살표 함수
const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== id)
};

removeTodo(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기

let todos = [{
    id: 3,
    content: 'HTML',
    completed: false
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 1,
    content: 'Javascript',
    completed: false
  }
];

// function countCompletedTodos() {
//  return todos.filter(todo => todo.completed).length;
// }

//화살표 함수
const countCompletedTodos = () => todos.filter(todo => todo.completed).length;
// 안한 일 찾기 
const countUncompletedTodos = () => todos.filter(todo => !todo.completed).length;

console.log(countCompletedTodos()); // 1
console.log(countUncompletedTodos()); // 2

// 9. id 프로퍼티의 값 중에서 최대값, 최소값 구하기
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// ...todos.map(todo => todo.id) // -> 3, 2, 1

function getMaxId() {
  // 빈 배열일 경우 방어코드 결과 -1
  return Math.max(...todos.map(todo => todo.id), -1);
  // return todos.length ? Math.max(...todos.map(todo => todo.id)) : -1;
}

// 화살표 함수
// const getMaxId = () => Math.max(...todos.map(todo => todo.id), -1);

function getMinId() {
  return todos.length ? Math.min(...todos.map(todo => todo.id)) : -1;
}

console.log(getMaxId()); // 3
console.log(getMinId()); // 1
