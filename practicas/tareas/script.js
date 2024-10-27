var fila = 0;
var contadorTarea = 0;
window.onload = mostrarFecha;

function agregar() {

    var tarea = document.getElementById("tareas").value;

    if (tarea == null || tarea == "") {
        alert("Debe de introducir una tarea");
    } else {

        registro = "";
        registro = fila % 2 == 0 ? registro = "<tr class=\"fila1\">" : registro = "<tr class=\"fila2\"> ";
        registro += "<td>" + "<input type=\"checkbox\" id=\"checkTarea\" onclick=\"cambiar(this)\" " + "</td>";
        registro += "<td>" + tarea + "</td>";
        registro += "</tr>";

        fila++;
        contadorTarea++;

        document.getElementById("tareasBody").innerHTML += registro;
        document.getElementById("numTareas").innerText = contadorTarea;
        document.forms["formularioTareas"].reset();
    }

}

function cambiar(checkbox) {

    var fila = checkbox.closest("tr"); 
    if (checkbox.checked) {
        fila.classList.add("completada"); 
    } else {
        fila.classList.remove("completada"); 
    }
}
function mostrarFecha() {
    const fecha = new Date();
    
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses empiezan desde 0
    const anio = fecha.getFullYear();
    
    // Formato final
    const fechaFormateada = `${dia}-${mes}-${anio}`;
    
    document.getElementById("fechaActual").innerText = `Hoy es: ${fechaFormateada}`;
}

function borrarTareas() {

    document.getElementById("tareasBody").innerHTML = "";
    contadorTarea = 0;
}
