console.log("todoList app is active here");
const todoList = [];

const removeItem = (itemNumber) => {
  document.getElementById("taskList").innerHTML = "";
  todoList.splice(itemNumber, 1);
  addTodo();
};

//create a function to add an item to todoList

const addTodo = (value) => {
  if (value) {
    todoList.push(value);
  }
  // console.log("got here");

  todoList.forEach((item, index) => {
    const nameList = document.getElementById("taskList");
    const list = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", item);
    deleteButton.setAttribute("onclick", "removeItem(" + index + ")");
    deleteButton.appendChild(document.createTextNode("delete"));
    console.log(deleteButton);

    const todoText = document.createElement("p");
    todoText.appendChild(document.createTextNode(item));
    console.log(todoText);

    //create a text node from the users input
    list.appendChild(todoText);
    list.appendChild(deleteButton);

    //adds the users textnode at the end of the list
    nameList.appendChild(list);
  });

  document.getElementById("inputName").value = "";
};
//add an addEventListener to click the button

document.querySelector("#myBtn").addEventListener("click", () => {
  //empty the ul child element
  document.getElementById("taskList").innerHTML = "";
  //add value in the input text property...
  const inputValue = document.getElementById("inputName").value;

  addTodo(inputValue);
  console.log("todoList", todoList);
  console.log("button clicked");
});
