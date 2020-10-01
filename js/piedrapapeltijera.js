
var eleccionMaquina;
var eleccionUsuario;
var usuario2;

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function piedra() {

    eleccionMaquina = aleatorio(0, 2);
    eleccionUsuario = 0

    if (eleccionMaquina == 1) {//el usuario eligio piedra 


        document.getElementById("efecto").innerHTML = '<img src="img/papel.png" height="150" size="150">';
        document.getElementById("texto").innerHTML = '<h3>¡Perdiste! La maquina eligio papel y tu piedra</h3>';
    } else {
        if (eleccionMaquina == 2) {

            document.getElementById("efecto").innerHTML = '<img src="img/tijera.png" height="150" size="150">';
            document.getElementById("texto").innerHTML = "<h3>¡Ganaste! La maquina eligio tijera y tu piedra</h3>";

        } else {
            if (eleccionMaquina == 0) {

                document.getElementById("efecto").innerHTML = '<img src="img/piedra.png" height="150" size="150">';
                document.getElementById("texto").innerHTML = "<h3>¡Empate! Ambos eligieron piedra</h3>";
            }
        }
    }

}

function papel() {

    eleccionMaquina = aleatorio(0, 2);
    eleccionUsuario = 1

    if (eleccionMaquina == 2) {//el usuario eligio piedra 


        document.getElementById("efecto").innerHTML = '<img src="img/tijera.png" height="150" size="150">';
        document.getElementById("texto").innerHTML = '<h3>¡Perdiste! La maquina eligio tijera y tu papel</h3>';
    } else {
        if (eleccionMaquina == 0) {

            document.getElementById("efecto").innerHTML = '<img src="img/piedra.png" height="150" size="150">';
            document.getElementById("texto").innerHTML = '<h3>¡Ganaste! La maquina eligio piedra y tu papel</h3>';

        } else {
            if (eleccionMaquina == 1) {
                
                document.getElementById("efecto").innerHTML = '<img src="img/papel.png" height="150" size="150">';
                document.getElementById("texto").innerHTML = '<h3>"¡Empate! Ambos eligieron papel"</h3>';

            }
        }
    }

}

function tijera() {

    eleccionMaquina = aleatorio(0, 2);
    eleccionUsuario = 2

    if (eleccionMaquina == 1) {//el usuario eligio piedra 
        document.getElementById("efecto").innerHTML = '<img src="img/piedra.png" height="150" size="150">';
        document.getElementById("texto").innerHTML = '<h3>"¡Perdiste! La maquina eligio piedra y tu elegiste tijera</h3>';

        
    } else {
        if (eleccionMaquina == 0) {
            document.getElementById("efecto").innerHTML = '<img src="img/papel.png" height="150" size="150">';
            document.getElementById("texto").innerHTML = '<h3>"Ganaste! La maquina eligio papel y tu tijera"</h3>';
            

        } else {
            if (eleccionMaquina == 2) {
                
                document.getElementById("efecto").innerHTML = '<img src="img/tijera.png" height="150" size="150">';
                document.getElementById("texto").innerHTML = '<h3>"¡Empate! Ambos eligieron tijera"</h3>';

            }
        }
    }

}


