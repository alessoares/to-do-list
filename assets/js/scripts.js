var taskToAdd = document.getElementById("input-text");
var btnAdd = document.getElementById("btn-add");
var tasks = document.getElementById("boxes");

btnAdd.addEventListener("click",addTask);

function addTask(){
if(taskToAdd.value.length == 0){
  alert("O campo está vazio!\nDigite uma tarefa!");
  taskToAdd.focus();
  return;
}
 var check = document.createElement("input");
 var br = document.createElement("br");
 var lbl = document.createElement("label");
 var node = document.createTextNode(taskToAdd.value);
 var randomId = Math.floor(Math.random() * 100);

 lbl.setAttribute("for",randomId);
 lbl.setAttribute("class","task");
 lbl.appendChild(node);
 check.setAttribute("type","checkbox");
 check.setAttribute("class","task");
 check.setAttribute("id",randomId);
 check.setAttribute("onchange","showState(this)");
 

 tasks.appendChild(check);
 tasks.appendChild(lbl);
 tasks.appendChild(br);
}

function showState(state){
  texto = state.nextSibling;
  if(state.checked == true){
    texto.classList.add("task-selected");
  }else{
    texto.classList.remove("task-selected");
  }
}