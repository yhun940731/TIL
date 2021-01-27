// Global state
let todos = [];

// DOM nodes
// <ul class="todos"></ul>
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.getElementById('ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $completed = document.querySelector('.completed-todos');
const $active = document.querySelector('.active-todos');

const render = () => {
  $todos.innerHTML = todos.map(({ id, content, completed }) => `<li id="${id}" class="todo-item">
  <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
  <label for="ck-${id}">${content}</label>
  <i class="remove-todo far fa-times-circle"></i>
</li>`).join('');

  $completed.textContent = todos.filter(todo => todo.completed).length;
  $active.textContent = todos.filter(todo => !todo.completed).length;
};

const fetchTodos = () => {
  // TODO: 서버로부터 todos 데이타를 취득한다.(잠정 처리)
  todos = [{ id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false },
  ];

  todos = [...todos].sort((todo1, todo2) => todo2.id - todo1.id);
  render();
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
  render();
};

const toggleTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
  render();
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  render();
};

const togleComplted = () => {
  todos = todos.map(todo => ({ ...todo, completed: $completeAll.checked }));
  render();
};

const removeCompletedAll = () => {
  todos = todos.filter(todo => !todo.completed);
  render();
};

document.addEventListener('DOMContentLoaded', fetchTodos);

$inputTodo.onkeyup = e => {
  const content = $inputTodo.value;

  if (e.key !== 'Enter' || !content) return;
  addTodo(content);

  $inputTodo.value = '';
  $inputTodo.focus();
};

$todos.onchange = e => {
  const { id } = e.target.parentNode;
  toggleTodo(id);
};

$todos.onclick = e => {
  if (!e.target.classList.contains('remove-todo')) return;
  removeTodo(e.target.parentNode.id);
};

$completeAll.onchange = () => togleComplted();

$clearCompleted.onclick = () => {
  removeCompletedAll();
  $completeAll.checked = false;
};
