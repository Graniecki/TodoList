'use strict'

const root = document.querySelector('.todoapp');
const newTodo = root.querySelector('.new-todo');
const todoList = root.querySelector('.todo-list');

// Add a new item
newTodo.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' || newTodo.value === '') {
    return;
  }

  todoList.insertAdjacentHTML('beforeend', `
    <li class="todo-item">
      <div class="check">&#43;</div>
      <span>${newTodo.value}</span>
      <div class="remove">&#88;</div>
    </li>
  `);

  newTodo.value = '';
});

// Remove item
todoList.addEventListener('click', (event) => {
  if (!event.target.matches('.remove')) {
    return;
  }

  event.target.parentElement.remove();
});

// Check item
todoList.addEventListener('click', (event) => {
  const { target } = event;

  if (!target.matches('.check')) {
    return;
  }

  target.classList.toggle('checked');
  target.parentElement.querySelector('span').classList.toggle('selected');
});
