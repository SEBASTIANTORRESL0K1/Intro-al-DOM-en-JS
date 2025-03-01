let btn=document.getElementById("btn");
let contador=0;
btn.addEventListener("click",()=>{
    let cont=document.getElementById("container");
    let text=document.getElementById("text").value;
    let fechaActual= new Date();
    if(contador==0&&revisarSiEstaVacio()){
        cont.innerHTML+=`<div id="div${contador}" class="comment"><p id='p${contador}' class='parrafo'>${text}</p><button class='btn' onclick="EliminarComentario(${contador})">Eliminar</button><div class="time"><span>Fecha: ${fechaActual.getDate()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()}</span><span>Hora: ${fechaActual.getHours()}:${fechaActual.getSeconds()}</span></div></div>`;
        
        contador++;
    } else{
        if(revisarSiEstaVacio()){
            let nuevoDiv=document.createElement("div");
            nuevoDiv.classList.add("comment");
            nuevoDiv.id=`div${contador}`;
            let nuevoParrafo=document.createElement("p");
            nuevoDiv.innerHTML=`<p id='p${contador}' class='parrafo'>${text}</p><button class='btn' onclick="EliminarComentario(${contador})">Eliminar</button><div class="time"><span>Fecha: ${fechaActual.getDate()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()}</span><span>Hora: ${fechaActual.getHours()}:${fechaActual.getSeconds()}</span></div>`;
            cont.insertBefore(nuevoDiv, cont.firstChild);
            contador++;
           
        } else{
            alert("No puedes enviar un comentario vacío");
        }
        
    }
    document.getElementById("text").value="";});
function revisarSiEstaVacio(){
    let text=document.getElementById("text").value;
    if(text==""){
       return false;
    } else{
        return true;
    }
}
function EliminarComentario(id){
    let cont=document.getElementById("container");
    let div=document.getElementById(`div${id}`);
    cont.removeChild(div);
}
