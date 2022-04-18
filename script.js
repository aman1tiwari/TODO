var todo = [];
var completed_todo = [];

function display(){
    var list = ""
    todo.forEach((element,index) => {
    var item =`<li>
    <input type="checkbox" onclick="check(${index})" /><label>${element}</label
    ><input type="text" /><button class="edit" onclick="edit(${index})">Edit</button
    ><button class="delete" onclick="del(${index})">Delete</button>
    </li>`;
    // console.log(index)
    list += item;
});
document.getElementById("incomplete-tasks").innerHTML =list;
};

function add(){
    var item  = document.getElementById("new-task").value;
    todo.push(item)
    console.log(todo)
    display();
};

function edit(index){
    var listitem = todo[index];
    document.getElementById("todoindex").value=index;
    var x = document.getElementById("todoindex").classList.add('todo');
    document.getElementById("new-task").value=listitem;
    document.getElementById('addbtn').style.display = 'none';
    document.getElementById("updatebtn").style = display;
};

function update(){
    var item = document.getElementById("new-task").value;
    var index = document.getElementById("todoindex").value;
    var x = document.getElementById("todoindex").className;
    console.log(x);
    if(x == "todo"){
        todo[index]=item;
        display();
        document.getElementById("todoindex").className="";
    }
    else{
        completed_todo[index]=item;
        displaycomp();
        document.getElementById("todoindex").className="";
    }
    
    
    document.getElementById('addbtn').style = display;
    document.getElementById("updatebtn").style.display = 'none';
}

function del(index){
    todo.splice(index,1);
    display();
};

function check(index){
    var value = todo[index];
    completed_todo.push(value);
    todo.splice(index,1);
    displaycomp();
    display();
};

// completed task
function displaycomp(){
    var list = ""
    completed_todo.forEach((element,index) => {
    var item =`<li>
    <input type="checkbox" onclick="compcheck(${index})" /><label>${element}</label
    ><input type="text" /><button class="edit" onclick="compedit(${index})">Edit</button
    ><button class="delete" onclick="compdel(${index})">Delete</button>
    </li>`;
    console.log(index)
    list += item;
});

document.getElementById("completed-tasks").innerHTML =list;
};

function compedit(index){
    var listitem = completed_todo[index];
    document.getElementById("todoindex").value=index;
    document.getElementById("new-task").value=listitem;
    var x = document.getElementById("todoindex").classList.add('completed_todo')
    document.getElementById('addbtn').style.display = 'none';
    document.getElementById("updatebtn").style = display;
};
function compdel(index){
    completed_todo.splice(index,1);
    displaycomp();
};

function compcheck(index){
    var value = completed_todo[index];
    todo.push(value);
    completed_todo.splice(index,1);
    displaycomp();
    display();
};