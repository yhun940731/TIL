// commonJS가 아닌 module 방식 사용 -> package.json에 type: module
import express from 'express';
import cors from 'cors';

import isEmptyObject from './utils/isEmptyObject.mjs';
import isDuplicatedId from './utils/isDuplicatedId.mjs';

let todos = [
  { id: 4, content: 'React', completed: false },
  { id: 3, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'HTML', completed: true },
];

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.get('/todos/:id', (req, res) => {
  const id = +req.params.id;

  if (todos.map(todo => todo.id).includes(id)) {
    res.send(todos.filter(todo => todo.id === +req.params.id));
  } else {
    res.send({
      error: true,
      reason: `id ${req.body.id}는 존재하지 않는 id입니다.`
    });
  }
});

app.post('/todos', (req, res) => {
  const newTodo = req.body;

  // 페이로드가 없는 경우
  if (isEmptyObject(newTodo)) {
    res.status(400).send({
      error: true,
      reason: 'payload가 존재하지 않습니다.'
    });
  }

  // 아이디가 중복되는 경우
  if (isDuplicatedId(todos, newTodo.id)) {
    res.status(400).send({
      error: true,
      reason: `id ${req.body.id}는 중복된 id입니다.`
    });
  }

  todos = [req.body, ...todos];
  res.send(todos);
});

app.patch('/todos/:id', (req, res) => {
  const id = +req.params.id;
  const completed = req.body;

  if (todos.map(todo => todo.id).includes(id) && (typeof completed.completed === 'boolean')) {
    todos = todos.map(todo => (todo.id === +id ? { ...todo, ...completed } : todo));
    res.send(todos);
  } else {
    res.send({
      error: true,
      reason: `id ${req.body.id}에 대한 잘못된 접근입니다.`
    });
  }
});

app.patch('/todos', (req, res) => {
  const completed = req.body;
  if (todos.length) {
    todos = todos.map(todo => ({ ...todo, ...completed }));
    res.send(todos);
  } else {
    res.send({
      error: true,
      reason: '선택할 요소가 없음.'
    });
  }
});

app.delete('/todos/completed', (req, res) => {
  if (!(todos.filter(todo => todo.completed).length)) {
    res.send({
      error: true,
      reason: '완료된 요소가 없음.'
    });
  } else {
    todos = todos.filter(todo => !todo.completed);
    res.send(todos);
  }
});

app.delete('/todos/:id', (req, res) => {
  const id = +req.params.id;

  if (todos.map(todo => todo.id).includes(id)) {
    todos = todos.filter(todo => todo.id !== +id);
    res.send(todos);
  } else {
    res.send({
      error: true,
      reason: `id ${req.params.id}는 존재하지 않는 id입니다.`
    });
  }
});

app.listen('7000', () => {
  console.log('Server is listening on http://localhost:7000');
});