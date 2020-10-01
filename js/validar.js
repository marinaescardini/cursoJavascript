function mayus() {
    var x = document.getElementById("nombre");
    x.value = x.value.toUpperCase();
}

function mail() {
    var y = document.getElementById("email").value;
    var mail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (y == mail){
        
        return true;

    }
    else {
        document.getElementById("alerta").innerHTML='<img src="img/mal.png" height="20">"Por favor ingrese una direccion de email valida';
        return false;
    }
}