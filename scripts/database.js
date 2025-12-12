// Inicializa la base de datos si no existe
function initDB() {
    if (!localStorage.getItem("db")) {
        const db = {
            usuarios: [
                { id:1, rol:"admin", nombre:"Admin", usuario:"admin", pass:"123" }
            ],
            chats: []
        };
        localStorage.setItem("db", JSON.stringify(db));
    }
}

// Cargar DB
function loadDB() {
    initDB();
    return JSON.parse(localStorage.getItem("db"));
}

// Guardar DB
function saveDB(db) {
    localStorage.setItem("db", JSON.stringify(db));
}
