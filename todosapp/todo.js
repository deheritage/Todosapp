console.log("todoList app is active here");
const todoList = [];
console.log("todoList");

//create a function to add an item to todoList

const addTodo = (value) => {
return todoList.push(value);
}
//create an addEventListener to click the button

document.querySelector("#myBtn").addEventListener("click", () => {
    //add value in the input text...
    const inputValue = document.getElementById("inputName").value;

    //create the innerHTML for the ul id
    document.getElementById("taskList").innerHTML = '';
    addTodo(inputValue);
    console.log("button clicked");
});
