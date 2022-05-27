const deleteBtn = document.querySelector('.delete')
const comfirmBtn = document.querySelector('.comfirm')
const cancel = document.querySelector('.cancel')
const modal =document.querySelector('body')
let todo = document.querySelector('.learnReact')

const todoList = ["Learn React"]


window.addEventListener("DOMContentLoaded",()=>{
    todo.innerHTML = todoList[0];
})

deleteBtn.addEventListener('click',function(){
    modal.classList.add('show')
})

cancel.addEventListener('click',function(){
    modal.classList.remove('show')
})

comfirmBtn.addEventListener('click',function(){
    todoList.splice(0,1);
    if(todoList.length<1){
        todo.innerHTML="";
    }
    else{
        todo.innerHTML = todoList[0];
    }

    modal.classList.remove('show')
   
})
