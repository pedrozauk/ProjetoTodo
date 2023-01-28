var tarefas = new Array();
 var btn_c = document.getElementById("btnconclui");
 if(btn_c){
btn_c.addEventListener("click", function(){
  alert("teste");
} 
 ) 
}
if(btn_c){
  alert("foi");
}

function adicionarTarefa(tarefa){

    if (tarefa.length == 0) {
      alert("nada escrito");
}

else{
  
  var area = document.getElementById("item-tarefa");
  var tarefaEl = document.createElement("ul") ;
  numero = localStorage.getItem("numero");
  if(numero){
    numero = parseInt(numero) + 1
    localStorage.setItem(numero, tarefa);
    localStorage.setItem("numero", numero);
    
  }
  else{
    numero = 0;
    localStorage.setItem(numero, tarefa);
    localStorage.setItem("numero", numero);
    
  }
  
  

  tarefaEl.innerHTML = 
  "<br>"
+
 '<div class="card" >'
  +
'<div class="card-content" >' 
+
  '<p class="title">' + tarefa + '</li>'
 +
 '</div>'
 +
 '<footer class="card-footer mgh-3">'
+
 
 '<button onclick="deletaItem(' +numero +')" '+ ' ' +'id="btndeletat" class="button card-footer-item" >Feito </button>'
  +  
  '</footer>'
  +
  '</div>'
  ;
    tarefaEl.setAttribute("name",parseInt(numero));
  area.append(tarefaEl);
  document.getElementById("tarefa-input").value = "";
}

}

function carregaItens(){
  const area = document.getElementById("item-tarefa");
    
  var chaves = Object.keys(localStorage);
  for(var chave in chaves){
      const tarefaEl = document.createElement("div") ; 
      let tarefa = localStorage.getItem(chave);
      if(tarefa == null){
        
      } 
      else{
    tarefaEl.innerHTML = 
  "<br>"
+
 '<div class="card" >'
  +
'<div class="card-content" >' 
+
  '<p class="title">' + tarefa + '</li>'
 +
 '</div>'
 +
 '<footer class="card-footer mgh-3">'
+
 '<button onclick="deletaItem(' +chave+')" '+ ' ' +'id="btndeletat" class="button card-footer-item" >Feito</button>'
 +

  '</footer>'
  +
  '</div>'
  ;
  tarefaEl.setAttribute("name",parseInt(chave));
  area.append(tarefaEl);
      } 
  }
}


function deletaItem(id){
  
  localStorage.removeItem(id);
  var elemento = document.getElementsByName(id);
  elemento[0].remove();
  
  
}

  