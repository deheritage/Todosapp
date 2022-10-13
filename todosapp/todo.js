console.log("todoList app is active here");

const getTodos = () => {
    const todos = localStorage.getItem('todoList');
    return todos ? JSON.parse(todos) : [];
}

const todoList = getTodos();

const setTodos = (todos) => {
localStorage.setItem('todoList', JSON.stringify(todos)
);
}


//create a function to add an item to todoList

const addTodo = (value) => {
  if (value) {
    todoList.push({id: Date.now(), value:value, isCompleted: false});
    setTodos(todoList);


  }
  document.getElementById("inputName").value = "";
  refreshDom();
};

const editItem = (itemNumber) => {
  let editedItem = prompt("Edit Todo", todoList[itemNumber].value);
  
  if (editedItem) {
    todoList[itemNumber].value = editedItem;
  setTodos(todoList);
}
refreshDom();
}

const removeItem = (itemNumber) => {
  todoList.splice(itemNumber, 1);
setTodos(todoList);

  refreshDom();
};

const editIsCompleted = (itemNumber) => {
if (itemNumber > -1) {
  todoList[itemNumber].isCompleted = !todoList[itemNumber].isCompleted;
  
}
refreshDom();
}

const refreshDom=()=>{
  document.getElementById("taskList").innerHTML = "";
  console.log(todoList);
  todoList.forEach((item, index) => {
    const nameList = document.getElementById("taskList");
    const newClassName = item.isCompleted ? 'isCompleted' : '';
    console.log(newClassName);
    const list =
      "<li><p class='"+newClassName+"' onclick={editIsCompleted(" +
      index +
      ")} >" +
      item.value +
      "</p> <div><button onclick={removeItem(" +
      index +
      ")}><i class='fa fa-trash'></i></button><button onclick={editItem(" +
      index +
      ")}><i class='fa fa-edit'></i></button></div></li>";


    //adds the users textnode at the end of the list
    nameList.innerHTML += list;
    
  });
}
//add an addEventListener to click the button
refreshDom();

document.querySelector("#myBtn").addEventListener("click", () => {
  //add value in the input text property...
  const inputValue = document.getElementById("inputName").value;
  addTodo(inputValue);
});
