const todoList = [];
let curId = 0

const addBtn = document.getElementById('addBtn');
const newItemInput = document.getElementById('newItem');
const noteList = document.getElementById('note-list');
const task = document.getElementById('task');
const [all, incomplete, complete] = document.getElementsByClassName('tabs');

function handleClick(){
    const delIndex = todoList.findIndex(i=>i.curId==this.id);
    // console.log(delIndex,this.id);
    todoList.splice(delIndex,1);
    document.querySelectorAll('#note-list li').forEach(lis=>{
        if (lis.id===this.id){
            lis.remove();
        }
    })
    // console.log(todoList);
    updateTask();
}

function check(){
    this.classList.toggle('checked');
}

function addItem(item) {
    curId++;
    todoList.push({curId,item});

    const listElement = document.createElement('li');
    const para = document.createElement('p');
    const delBtn = document.createElement('button');
    listElement.id = curId;
    listElement.addEventListener('click',check);
    para.textContent = item;
    delBtn.id = curId;
    delBtn.textContent = 'x';
    delBtn.addEventListener('click', handleClick);
    listElement.append(para,delBtn);
    noteList.appendChild(listElement);
    updateTask();
}

addBtn.addEventListener('click',()=>{
    if (newItemInput.value){
        addItem(newItemInput.value);
        newItemInput.value = '';
    }
})

function updateTask() {
    task.textContent = ` ${todoList.length} tasks left`;
}

updateTask();
all.addEventListener('click', ()=>{
    document.querySelectorAll('#note-list li').forEach(lis=>{
        lis.classList.remove('hide');
    })
});

incomplete.addEventListener('click', ()=>{
    document.querySelectorAll('#note-list li').forEach(lis=>{
        if (lis.classList.contains('checked')) lis.classList.add('hide');
        else lis.classList.remove('hide');
    })
});

complete.addEventListener('click', ()=>{
    document.querySelectorAll('#note-list li').forEach(lis=>{
        if (lis.classList.contains('checked')) lis.classList.remove('hide');
        else lis.classList.add('hide');
    })
});
