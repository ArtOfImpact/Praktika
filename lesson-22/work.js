const root = document.getElementById('root')

const bigWrapper = document.createElement('div')
bigWrapper.classList.add('container')

const wrapperRow = document.createElement('div')
wrapperRow.classList.add('container-nav')

const deleteAllButton = document.createElement('button')
deleteAllButton.textContent = 'Delete All'
deleteAllButton.classList.add('btn')

const addTodoTextField = document.createElement('input')
addTodoTextField.placeholder = 'Enter todo....'
addTodoTextField.classList.add('input')

const addTodoButton = document.createElement('button')
addTodoButton.textContent = 'Add'
addTodoButton.classList.add('btn')

wrapperRow.append(deleteAllButton, addTodoTextField, addTodoButton)


const todoElement = document.createElement('div')
todoElement.classList.add('container-item')

const completeButton = document.createElement('button')
completeButton.classList.add('btn-check')
completeButton.innerText = '✓'

const todoTextElement = document.createElement('div')
todoTextElement.classList.add('item-text')
todoTextElement.innerText = 'Todo text'

const interaction = document.createElement('div')
interaction.classList.add('item-interaction')

const endButton = document.createElement('button')
endButton.classList.add('btn-end')
endButton.innerText = 'X'

const dateTodo = document.createElement('div')
dateTodo.classList.add('box')
dateTodo.innerText = 'Date'

todoElement.append(completeButton, todoTextElement, interaction)
interaction.append(endButton, dateTodo)


const box = document.createElement('div')
box.classList.add('container-item')

const boxButton = document.createElement('button')
boxButton.classList.add('btn-check')
boxButton.innerText = '✓'

const boxText = document.createElement('div')
boxText.classList.add('item-text')
boxText.innerText = 'Todo text'

const boxInteractions = document.createElement('div')
boxInteractions.classList.add('item-interaction')

const end = document.createElement('button')
end.classList.add('btn-end')
end.innerText = 'X'

const date = document.createElement('div')
date.classList.add('box')
date.innerText = 'Date'

box.append(boxButton, boxText, boxInteractions)
boxInteractions.append(end, date)




bigWrapper.append(wrapperRow, todoElement, box)
root.append(bigWrapper)