const express = require('express');
const cors = require('cors');

let todos = [
  { id: 3, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'HTML', completed: false },
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
  if (!(todos.map(todo => todo.id).includes(req.body.id))) {
    todos = [req.body, ...todos];
    res.send(todos);
  } else {
    res.send({
      error: true,
      reason: `id ${req.body.id}는 이미 존재하는 id입니다.`
    });
  }
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
  todos = todos.map(todo => ({ ...todo, ...completed }));
  res.send(todos);
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
