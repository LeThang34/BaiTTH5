const dataTodo =
{
    "todoList":
        [
            {
                "taskBlock": "Homework", "tasks":
                    [
                        { "task": "Nền tảng web", "done": false },
                        { "task": "Phân tích thiết kế hệ thống", "done": false },
                        { "task": "lập trình windows", "done": false }
                    ]
            },
            {
                "taskBlock": "Work", "tasks":
                    [
                        { "task": "Analysis", "done": false },
                        {"task": "Sorting", "done": false, "subtasks":
                                [
                                    {
                                        "task": "Save files", "done": false, "subtasks":
                                            [
                                                { "task": "Pull from computer 1", "done": false },
                                                { "task": "Walk to computer 2", "done": false },
                                                { "task": "Save on computer 2", "done": false }
                                            ]
                                    },
                                    { "task": "Sort files", "done": false },
                                    { "task": "Plot data", "done": false }
                                ]
                        }
                    ]
            }
        ]
}

const list = document.querySelector('.todo_list');

const todoListHomework = dataTodo.todoList[0].tasks;
const todoListWork = dataTodo.todoList[1].tasks;

console.log(todoListWork[0].task);

function render(data) {
    let html = data.map(e => {
        let status = "Mai làm";
        if(e.done){
            status="Xong";
        }
        return `
            <div class="todo">
                <div class="name">${e.task}</div>
                <div class="status">${status}</div>
                <input type="checkbox" class="check">
            </div>
        `
    })
    list.innerHTML += html.join('');
}

render(todoListHomework);
render(todoListWork);


const checkTodo = document.querySelectorAll('.todo');
console.log(checkTodo)


checkTodo.forEach(e=>{
    e.addEventListener('change',el=>{
        if(el.target.checked){
            e.querySelector('.status').innerHTML="Xong"
            e.querySelector('.status').style.color = "green"
        }
        else{
            e.querySelector('.status').innerHTML="Mai làm"
            e.querySelector('.status').style.color = "red"
        }
    })
})