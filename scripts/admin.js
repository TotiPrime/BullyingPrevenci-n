function cargarUsuarios() {
    const db = loadDB();
    const tabla = document.getElementById("tablaUsuarios");
    if(!tabla) return;
    tabla.innerHTML = "";
    db.usuarios.forEach((u, i) => {
        let extra = "";
        if(u.rol === "padre") extra = (u.hijos || []).join(", ");
        if(u.rol === "soporte") extra = (u.pacientes || []).join(", ");
        tabla.innerHTML += `<tr>
            <td>${u.usuario}</td>
            <td>${u.rol}</td>
            <td>${extra}</td>
            <td>
                <button onclick="adminEditar(${i})">Editar</button>
                <button onclick="adminEliminar(${i})">Eliminar</button>
            </td>
        </tr>`;
    });
}

function adminAgregarUsuario() {
    const db = loadDB();
    const u = document.getElementById("admUser").value;
    const p = document.getElementById("admPass").value;
    const rol = document.getElementById("admRol").value;
    if(!u || !p) { alert("Completa todos los campos"); return; }
    const nuevo = { id: Date.now(), usuario:u, pass:p, rol:rol };
    if(rol==="padre") nuevo.hijos = [];
    if(rol==="soporte") nuevo.pacientes = [];
    db.usuarios.push(nuevo);
    saveDB(db);
    cargarUsuarios();
}

function adminEliminar(i) {
    const db = loadDB();
    if(confirm("¿Eliminar usuario?")) {
        db.usuarios.splice(i,1);
        saveDB(db);
        cargarUsuarios();
    }
}

function adminEditar(i) {
    const db = loadDB();
    let u = db.usuarios[i];
    let nuevoUser = prompt("Usuario", u.usuario);
    let nuevoPass = prompt("Contraseña", u.pass);
    if(nuevoUser) u.usuario = nuevoUser;
    if(nuevoPass) u.pass = nuevoPass;
    saveDB(db);
    cargarUsuarios();
}
