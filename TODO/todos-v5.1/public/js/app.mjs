import ajax from './promise.mjs';

// State
let todos = [];
let navState = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all > .checkbox');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $nav = document.querySelector('.nav');

const render = () => {
  const _todos = todos.filter(({ completed }) => (navState === 'completed' ? completed : navState === 'active' ? !completed : true));

  const $fragment = document.createDocumentFragment();

  $todos.textContent = '';

  _todos.forEach(({ id, content, completed }) => {
    const $li = document.createElement('li');
    const $input = document.createElement('input');
    const $label = document.createElement('label');
    const textNode = document.createTextNode(content);
    const $i = document.createElement('i');

    $li.setAttribute('id', id);
    $li.classList.add('todo-item');

    $input.setAttribute('id', `ck-${id}`);
    $input.classList.add('checkbox');
    $input.setAttribute('type', 'checkbox');
    if (completed) $input.setAttribute('checked', '');

    $label.setAttribute('for', `ck-${id}`);
    $label.appendChild(textNode);

    $i.classList.add('remove-todo', 'far', 'fa-times-circle');

    $li.appendChild($input);
    $li.appendChild($label);
    $li.appendChild($i);

    $fragment.appendChild($li);
  });

  $todos.appendChild($fragment);

  $completedTodos.textContent = todos.filter(({ completed }) => completed).length;
  $activeTodos.textContent = todos.filter(({ completed }) => !completed).length;

  // 모두 체크될 경우 전체 표시 on
  if (todos.filter(todo => todo.completed).length === todos.length) $completeAll.checked = true;
  else $completeAll.checked = false;
};

const setTodos = _todos => {
  todos = _todos.sort((todo1, todo2) => todo2.id - todo1.id);
  console.log(todos);
  render();
};

const getTodos = async () => {
  try {
    const _todos = await ajax.get('/todos');
    setTodos(_todos);
  } catch (err) {
    console.error(err);
  }
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = async content => {
  try {
    const _todos = await ajax.post('/todos', { id: generateId(), content, completed: false });
    setTodos(_todos);
  } catch (err) {
    console.error(err);
  }
};

const toggleTodo = async id => {
  const completed = !todos.find(todo => todo.id === +id).completed;

  try {
    const _todos = await ajax.patch(`/todos/${id}`, { completed });
    setTodos(_todos);
  } catch (err) {
    console.error(err);
  }
};

const removeTodo = async id => {
  try {
    const _todos = await ajax.delete(`/todos/${id}`);
    setTodos(_todos);
  } catch (err) {
    console.error(err);
  }
};

const toggleCompleteAll = async completed => {
  try {
    const _todos = await ajax.patch('/todos', { completed });
    setTodos(_todos);
  } catch (err) {
    console.error(err);
  }
};

const removeCompleted = async () => {
  try {
    const _todos = await ajax.delete('/todos/completed');
    setTodos(_todos);
  } catch (err) {
    console.error(err);
  }
};

const changeNavState = id => {
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem.id === id);
  });

  navState = id;

  console.log('[changeNavState]', navState);
  render();
};

// Event bindings
window.onload = getTodos;

$inputTodo.onkeyup = ({ keyCode, target }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;
  addTodo(content);
  target.value = '';
};

$todos.onchange = e => {
  toggleTodo(e.target.parentNode.id);
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > .remove-todo')) return;
  removeTodo(e.target.parentNode.id);
};

$completeAll.onchange = e => {
  toggleCompleteAll(e.target.checked);
};

$clearCompleted.onclick = removeCompleted;

$nav.onclick = ({ target }) => {
  if (target === $nav) return;
  // if (!target.matches('.nav > li:not(.active)')) return;

  changeNavState(target.id);
};
