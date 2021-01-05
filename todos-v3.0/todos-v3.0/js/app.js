let todos = [];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.getElementById('ck-complete-all');
const $clearComplete = document.querySelector('.clear-completed > .btn');
const $completed = document.querySelector('.completed-todos');
const $active = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');

const parse = renderList => renderList.map(({ id, content, completed }) => `<li id="${id}" class="todo-item">
    <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`).join('');

const render = () => {
  const $nowActive = document.querySelector('.active');

  let list = [];

  if ($nowActive.id === 'all') list = todos;
  else if ($nowActive.id === 'active') list = todos.filter(todo => !todo.completed);
  else if ($nowActive.id === 'completed') list = todos.filter(todo => todo.completed);

  $todos.innerHTML = parse(list);
  $completed.textContent = todos.filter(todo => todo.completed).length;
  $active.textContent = todos.filter(todo => !todo.completed).length;
};

const fetchTodos = () => {
  // TODO: 서버로 부터 데이터 로드 (잠정 처리)
  todos = [{ id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false },
  ];
  todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);

  render();
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];

  render();
};

const toggleTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));

  if (todos.filter(todo => todo.completed).length === todos.length) $completeAll.checked = true;
  else $completeAll.checked = false;

  render();
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  render();
};

const toggleCompleted = () => {
  todos = todos.map(todo => ({
    ...todo,
    completed: $completeAll.checked
  }));
  render();
};

const removeCompletedAll = () => {
  todos = todos.filter(todo => !todo.completed);
  render();
};

const changeTab = tab => {
  [...$nav.children].forEach(navList => navList.classList.remove('active'));
  tab.classList.add('active');
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
  const {
    id
  } = e.target.parentNode;
  toggleTodo(id);
};

$todos.onclick = e => {
  if (!e.target.classList.contains('remove-todo')) return;
  removeTodo(e.target.parentNode.id);
};

$completeAll.onchange = () => toggleCompleted();

$clearComplete.onclick = () => {
  removeCompletedAll();
  $completeAll.checked = false;
};

$nav.onclick = e => {
  if (e.target.classList.contains('active')) return;
  changeTab(e.target);
};
