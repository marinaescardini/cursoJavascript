function corregir() {

    var total = 5;
    var puntos = 0;

    var miForm = document.forms["trivia"];
    var respuestas = ["a", "b", "c", "d", "b"];

    for (var i = 1; i <= respuestas.length; i++) {
        if ((miForm["p" + i].value === null) || (miForm["p" + i].value === "")) {
            document.getElementById("alertaresult").innerHTML=("Por favor responde la pregunta: " + i);
            return false;

        } else {
            if (miForm["p" + i].value === respuestas[i - 1]) {

                ++puntos;

            }
        }

    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h2>Obtuviste <span> '+ puntos + ' </span> de '+ total + '';
    return false;

}
