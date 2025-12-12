let soporte = JSON.parse(localStorage.getItem("currentUser"));
let dbSoporte = loadDB();
let pacBox = document.getElementById("listaPacientes");


if(pacBox && soporte.pacientes){
soporte.pacientes.forEach(p=>{
pacBox.innerHTML += `<li>${p} <button onclick=\"openChatSoporte('${p}')\">Chat</button></li>`;
});}