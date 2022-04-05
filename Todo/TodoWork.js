

const root = document.getElementById('root')

// ----------------- Action Panel -----------------

const bigWrapper = document.createElement('div')
bigWrapper.classList.add('container')

const wrapperRow = document.createElement('div')
wrapperRow.classList.add('container-wrapper')

const deleteAllButton = document.createElement('button')
deleteAllButton.textContent = 'Delete All'
deleteAllButton.classList.add('btn')

const deleteLast = document.createElement('button')
deleteLast.textContent = 'Delete Last'
deleteLast.classList.add('btn')



const addTodoTextField = document.createElement('input')
addTodoTextField.placeholder = 'Enter todo...'
addTodoTextField.setAttribute('id', 'todo-input')

const addTodoButton = document.createElement('button')
addTodoButton.textContent = 'Add'
addTodoButton.classList.add('btn')

wrapperRow.append(deleteAllButton, deleteLast, addTodoTextField, addTodoButton)

const nav = document.createElement('div')
nav.classList.add('nav')

const all = document.createElement('span')
all.textContent = 'All:0'
all.classList.add('nav__text')

const completed = document.createElement('span')
completed.textContent = 'Completed:0'
completed.classList.add('nav__completed')


const showAll = document.createElement('button')
showAll.textContent = 'Show All'
showAll.classList.add('btn')

const showCompleted = document.createElement('button')
showCompleted.textContent = 'Show Completed'
showCompleted.classList.add('btn-c')


const navTodoTextField = document.createElement('input')
navTodoTextField.placeholder = 'Search...'
navTodoTextField.setAttribute('id', 'nav-input')

nav.append(all, completed, showAll, showCompleted, navTodoTextField)

const continerTodo = document.createElement('div')
continerTodo.classList.add('cotainer__Todo')
continerTodo.setAttribute('id', 'Container')

// ----------------- Todos -----------------

function getTodo(text) {
  const todoElement = document.createElement('div')
  todoElement.classList.add('todo-item')

  const completeButton = document.createElement('button')
  completeButton.classList.add('btn-todo-action')
  completeButton.innerText = ''
  completeButton.addEventListener('click', () => {
    completeButton.innerText = completeButton.innerText === '' ? 'v' : ''
  })
  const cla = () => {
    if (todoElement.classList.contains('complete')) {
      todoElement.classList.remove('complete')
    } else {
      todoElement.classList.add('complete');
    }
  }
  completeButton.addEventListener('click', cla)
  const compl = () => {
    const todoItems = document.querySelectorAll('.complete')
    console.log(todoItems)
    for (i = 0; i <= todoItems.length; i++) {
      completed.innerHTML = `<span>Completed:${i}</span>`
    }
  }
  const completec = () => {
    if (todoElement.classList.contains('complete')) {

      todoElement.classList.remove('hide')
    } else if (todoElement.classList.contains('todo-item')) {
      console.log('todoElement')
      todoElement.classList.add('hide');
    }
  }
  showCompleted.addEventListener('click', completec)
  completeButton.addEventListener('click', compl)

  const todoTextElement = document.createElement('div')
  todoTextElement.classList.add('todo-text')
  todoTextElement.innerHTML = `<span>${text}</span>`

  const columnWrapper = document.createElement('div')
  columnWrapper.classList.add('column-wrapper')

  const todoDeleteButton = document.createElement('button')
  todoDeleteButton.classList.add('btn-todo-action', 'delete')
  todoDeleteButton.innerText = 'X'
  todoDeleteButton.addEventListener('click', () => todoElement.remove());

  const todoDatetimeBox = document.createElement('span')
  todoDatetimeBox.classList.add('column-wrapper-date')
  todoDatetimeBox.innerText = (new Date()).toLocaleString()

  const search = () => {
    if (navTodoTextField.value === todoTextElement.textContent) {
      todoElement.classList.add('complete');
      completeButton.innerText = 'v';
    } else {
      todoElement.classList.remove('complete');
      completeButton.innerText = '';
      console.log(navTodoTextField.value, todoTextElement.value)
    }
  }

  navTodoTextField.addEventListener('keyup', search)
  navTodoTextField.addEventListener('keyup', compl)


  columnWrapper.append(todoDeleteButton, todoDatetimeBox)

  todoElement.append(completeButton, todoTextElement, columnWrapper)

  continerTodo.append(todoElement)

  return continerTodo;
}

// ----------------- Render section -----------------

bigWrapper.append(wrapperRow, nav, continerTodo)
root.append(bigWrapper)

const createTodo = () => {
  const text = addTodoTextField.value;
  bigWrapper.append(getTodo(text))
  addTodoTextField.value = '';
}

addTodoButton.addEventListener('click', createTodo)

const deleteAll = () => {
  const todoItems = document.querySelectorAll('.todo-item')
  const alls = document.querySelectorAll('.complete')
  alls.forEach((item) => item.remove());
  todoItems.forEach((item) => item.remove());
  all.textContent = 'All:0'
  completed.textContent = 'Completed:0'
}
deleteAllButton.addEventListener('click', deleteAll)

function allshow() {
  const td = document.querySelectorAll('.todo-item')
  td.forEach((item) => item.classList.remove('hide'))
}

showAll.addEventListener('click', allshow)


const allNumber = () => {
  const todoItems = document.querySelectorAll('.todo-item')
  for (i = 0; i <= todoItems.length; i++) {
    console.log(i);
    all.innerHTML = `<span>All:${i}<span>`
  }
}
addTodoButton.addEventListener('click', allNumber)

function remove_country() {
  let select = document.getElementById('Container');
  select.removeChild(select.lastChild);
}
deleteLast.addEventListener('click', remove_country)
