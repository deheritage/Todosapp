console.log("Todo app first log");

let todoList = [];
console.log("todoList");


const addTodo = (value) => {
    todoList.push(value);
    todoList.forEach(item=>{
        const list = document.getElementById("tasklist");
        const node = document.createElement('li');
        node.appendChild(document.createTextNode(item));
        list.appendChild(node);
    });
    document.getElementById("textElement").value = '';
};


document.querySelector("#myBtn").addEventListener("click", () => {
    const inputValue = document.getElementById("textElement").value;
    document.getElementById("tasklist").innerHTML='';
    addTodo(inputValue);

    console.log("todoList", todoList);
  console.log("button clicked");
});
 

