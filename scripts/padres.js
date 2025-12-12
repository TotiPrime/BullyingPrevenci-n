let padre = JSON.parse(localStorage.getItem("currentUser"));
let dbPadre = loadDB();
let lista = document.getElementById("listaCasos");


if(lista){
dbPadre.casos.filter(c=>c.alumno===padre.hijo).forEach(c=>{
lista.innerHTML += `<li>${c.descripcion}</li>`;
});
}


function openChat(){ localStorage.setItem("chatWith","soporte1"); goTo("chat.html"); }