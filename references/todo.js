//create an empty todoList array
let todoList = [];

console.log("todoList 1", todoList);

//create a function to add item to todoList
const addTodo = (todo) => todoList.push(todo);

// add an item to todoList
addTodo("banana");
console.log("todoList 2", todoList);
addTodo("apple");
console.log("todoList 3", todoList);

// // create a function to remove an item to todoList
const remTodo = (todo) => {
  todoList = todoList.slice(todo);
  return todoList;
};

const rv1 = remTodo(1);
console.log("todoList 4", rv1);

addTodo("mango");
console.log("todoList 5", todoList);
