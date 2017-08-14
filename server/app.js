const express = require('express');
const morgan = require('morgan');

const app = express();

// add your code here


var data = [{
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false
  },
  {
    todoItemId: 1,
    name: 'another item',
    priority: 2,
    completed: false
  },
  {
    todoItemId: 2,
    name: 'a done item',
    priority: 1,
    completed: true
  }
];
let addMockData = {
  todoItemId: 0,
  name: 'an item',
  priority: 3,
  completed: false
};


app.get('/', function (req, res) {
  res.status(200).json({
    status: 'ok'
  });
});

app.get('/api/TodoItems', function (req, res) {
  res.status(200).json(data);
});

app.get('/api/TodoItems/:number', function (req, res) {
  for (i = 0; i < data.length; i++) {
    if (req.params.number == data[i].todoItemId) {
      function findObject(data) {
        return data[i]
      }
      res.status(200).send(data[i])
    }
  }
});

app.post('/api/TodoItems', function (req, res) {
  let addedData = false;
  let newId = 0;
  for (let i = 0; i < data.length; i++) {
    if (newId == data[i].todoItemId){
      data[i] = addMockData;
      console.log(addMockData)
      addedData = true;
    }
  }
  if(addedData === false) {
    data.push(addMockData);
  }
  res.status(201).json(addMockData);
});

app.delete('/api/TodoItems/:number', function (req, res) {
 for (i = 0; i < data.length; i++) {
    if (req.params.number == data[i].todoItemId) {
      function findObject(data) {
        return data[i]
      }
      res.status(200).send(data[i])
    }
  }
});

app.get('/api/TodoItems/:number', function (req, res) {
   for (i = 0; i < data.length; i++) {
    if (req.params.number == data[i].todoItemId) {
      function findObject(data) {
        return data[i]
      }
      res.status(200).send(data[i])
    }
  }
});

app.use(morgan('dev'));

module.exports = app;
