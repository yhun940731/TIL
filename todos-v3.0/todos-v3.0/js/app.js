let todos = [];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.getElementById('ck-complete-all');
const $clearComplete = document.querySelector('.clear-completed > .btn');
const $completed = document.querySelector('.completed-todos');
const $active = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');

// innerHTML 사용할 시
// const parse = renderList => renderList.map(({ id, content, completed }) => `<li id="${id}" class="todo-item">
//     <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
//     <label for="ck-${id}">${content}</label>
//     <i class="remove-todo far fa-times-circle"></i>
//   </li>`).join('');

const render = () => {
  const $nowActive = document.querySelector('.active');

  let list = [];

  if ($nowActive.id === 'all') list = todos;
  else if ($nowActive.id === 'active') list = todos.filter(todo => !todo.completed);
  else if ($nowActive.id === 'completed') list = todos.filter(todo => todo.completed);

  // innerHTML 사용할 시
  // $todos.innerHTML = parse(list);

  // fragment 사용 시
  const $fragment = document.createDocumentFragment();

  const { childNodes } = $todos;

  [...childNodes].forEach(childNode => {
    $todos.removeChild(childNode);
  });

  list.forEach(({ id, content, completed }) => {
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

  $completed.textContent = todos.filter(todo => todo.completed).length;
  $active.textContent = todos.filter(todo => !todo.completed).length;

  // 모두 체크될 경우 전체 표시 on
  if (todos.filter(todo => todo.completed).length === todos.length) $completeAll.checked = true;
  else $completeAll.checked = false;
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

  render();
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  render();
};

const toggleCompleted = () => {
  todos = todos.map(todo => ({ ...todo, completed: $completeAll.checked }));

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
