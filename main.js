let form = document.querySelector("form");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let body = document.querySelector("body")
let button = document.getElementsByClassName("btn")
let navbar = document.getElementsByClassName('navbar');
let newMode = document.querySelector(".darkMode");
let secondMode = document.querySelector(".lightMode");
let box = document.getElementsByClassName("container");



  
// light dark mode

 let runDarkEvent = function (){
     box[0].style.backgroundColor = "black";
     box[0].style.color = "white";
     button[0].style.backgroundColor = "white";
     newMode.style.backgroundColor = "white";
     newMode.style.color = "black";

 };
 
 newMode.addEventListener("click" , runDarkEvent);

 let runLightEvent = function (){
     box[0].style.backgroundColor = "white";
     box[0].style.color = "black";
     newMode.style.backgroundColor = "black";
     newMode.style.color = "white";
  

 };
 
 secondMode.addEventListener("click" , runLightEvent);


// create li=======================================

function newTask(e) {
 e.preventDefault();
ul.className = "list-group";

let newLi = document.createElement('li');
newLi.innerText = input.value  ;
newLi.className = "list-group-item rounded-5 m-2 ";
let delBtn = document.createElement('button')
delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
delBtn.className = "btn fa-trash float-end  "



newLi.appendChild(delBtn);
ul.appendChild(newLi);
form.reset();
}

form.addEventListener("submit", newTask);

// delete button work==============================

const deleteTodo = (e)=>{
    if (e.target.className.includes("fa-trash "));{
if(window.confirm("Are You Sure ?")){
    let li = e.target.parentElement;
    ul.removeChild(li);
}
}
};

 ul.addEventListener("click",deleteTodo)

