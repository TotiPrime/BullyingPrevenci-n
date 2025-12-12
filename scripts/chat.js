function openChatHijo(idHijo) {
    localStorage.setItem("currentChat", idHijo);
    goTo("chat.html");
}

function sendMsg() {
    const input = document.getElementById("msgInput");
    const chatBox = document.getElementById("chatBox");
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const idHijo = JSON.parse(localStorage.getItem("currentChat"));

    if(!input || !user || idHijo==null) return;

    let db = loadDB();
    let chat = db.chats.find(c => c.idHijo==idHijo);
    if(!chat) {
        chat = { idHijo: idHijo, mensajes: [] };
        db.chats.push(chat);
    }

    const mensaje = { emisor:user.rol, texto: input.value.trim(), fecha:new Date().toLocaleString() };
    if(mensaje.texto==="") return;

    chat.mensajes.push(mensaje);
    saveDB(db);

    input.value = "";
    mostrarChat();
}

function mostrarChat() {
    const chatBox = document.getElementById("chatBox");
    const idHijo = JSON.parse(localStorage.getItem("currentChat"));
    if(!chatBox || idHijo==null) return;

    const db = loadDB();
    const chat = db.chats.find(c => c.idHijo==idHijo);
    chatBox.innerHTML = "";
    if(!chat) return;

    chat.mensajes.forEach(m=>{
        const div = document.createElement("div");
        div.textContent = `[${m.emisor}] ${m.texto} (${m.fecha})`;
        div.className = m.emisor==="hijo"?"bubble user":"bubble support";
        chatBox.appendChild(div);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}
