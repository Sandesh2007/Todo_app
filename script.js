// Made by Sandesh  
// Github: https://github.com/Sandesh2007
// Facebook :San Desh 

// Scripts for to-do app

// variable declaration
const inputBox=document.getElementById("task");
const list=document.getElementById("task-list");
const message=document.getElementById("task-status");


// this functiion adds task to the list 
function addTask(){
    if (inputBox.value=='') {
        message.textContent = 'Please enter a task.';
                    message.style.color = 'red';
                    setTimeout(() => {
                        message.textContent = '';
                    }, 4000);
    } else {
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveTask();
}

// this will toggles the checked class 
list.addEventListener("click",function(e){
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } 
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveTask();   
    }
});

// this will save user task to the browser / local storage

function saveTask(){
    localStorage.setItem("data",list.innerHTML);
}
// this will show the tasks every time the page is refreshed the site 

function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask()