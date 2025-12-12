// ========== LOGIN ==========
function login(user, pass) {
    const db = loadDB();
    const u = db.usuarios.find(x => x.usuario === user && x.pass === pass);
    
    if (!u) {
        alert("Usuario o contraseña incorrecta");
        return false;
    }

    localStorage.setItem("currentUser", JSON.stringify(u));

    switch (u.rol) {
        case "admin": goTo("admin.html"); break;
        case "padre": goTo("padre.html"); break;
        case "hijo": goTo("hijo.html"); break;
        case "soporte": goTo("soporte.html"); break;
    }
    return true;
}

// ========== LOGOUT ==========
function logout() {
    localStorage.removeItem("currentUser");
    goTo("index.html");
}

// ========== OBTENER USUARIO ACTUAL ==========
function getCurrentUser() {
    const u = localStorage.getItem("currentUser");
    return u ? JSON.parse(u) : null;
}

// ========== PROTEGER PAGINAS POR ROL ==========
function protectPage(rolesPermitidos) {
    const user = getCurrentUser();

    // No está logueado
    if (!user) {
        alert("Debe iniciar sesión");
        goTo("login.html");
        return;
    }

    // El rol no es permitido
    if (!rolesPermitidos.includes(user.rol)) {
        alert("No tiene permiso para acceder a esta página");
        goTo("index.html");
        return;
    }
}
