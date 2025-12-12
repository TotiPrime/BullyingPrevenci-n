function goTo(page) {
    window.location.href = page;
}

function goBackPanel() {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) { goTo("index.html"); return; }
    switch(user.rol){
        case "padre": goTo("padre.html"); break;
        case "hijo": goTo("hijo.html"); break;
        case "soporte": goTo("soporte.html"); break;
        case "admin": goTo("admin.html"); break;
        default: goTo("index.html");
    }
}
