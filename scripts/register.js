function registrarPadre(){
let db = loadDB();
let user = document.getElementById("regUser").value;
let pass = document.getElementById("regPass").value;
let hijo = document.getElementById("regHijo").value;


db.usuarios.push({ usuario:user, pass:pass, rol:"padre", hijo:hijo });
saveDB(db);


alert("Registro exitoso");
goTo("login.html");
}