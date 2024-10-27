

var fila = 0;

function validar(){


    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;

    var genero = document.querySelector('input[name=genero]:checked');
    var dulceFav = document.querySelectorAll('input[name=dulces]:checked');

    var fecha = document.getElementById("fechaRegistro").value;
    var color = document.getElementById("colorFavorito").value;
    var consumo = document.getElementById("consumo").value;
    
    if(nombre == null || nombre == ""){
        alert("El campo del nombre está vacío ");
    } else if(email == null || email == ""){
        alert("El campo de email está vacio.");
    } else if(edad == null || edad == ""){
        alert("El campo de la edad esta vacio.");
    }else if(genero == null){
        alert("Debe seleccionar algún género");
    }else if(dulceFav.length == 0){
        alert("Debe seleccionar algun dulce. ");
    }else if(fecha == null || fecha == ""){
        alert("Debes de seleccionar una fecha válida");
    } else if(color == null || color == ""){
        alert("Debes de seleccionar un color");
    }else if(consumo == null || consumo == ""){
        alert("Debes de seleccionar tu consumo");
    }else{

        genero = genero.value;
        var dulceFavArray = [];
        // Recuperar el valor de los dulces
        for(var z of dulceFav){
            dulceFavArray= z.value;
        }

        //Escogemos el estilo de la fila 
        registro = fila % 2 == 0 ? registro = "<tr class=\"fila1\">" : registro = "<tr class=\"fila2\"> ";
        // Iniciamos el registro de los datos

        registro += "<td> " + nombre + "</td>";
        registro += "<td> " + email + "</td>";
        registro += "<td> " + edad + "</td>";
        registro += "<td> " + genero + "</td>";
        registro += "<td> " + dulceFavArray+ "</td>";
        registro += "<td> " + fecha + "</td>";
        registro += "<td> " + color + "</td>";
        registro += "<td> " + consumo + "</td>";

        registro += "</tr>";
        fila++;
        document.getElementById("registros").innerHTML += registro;

        document.forms["formularioDatos"].reset();
    }


}

