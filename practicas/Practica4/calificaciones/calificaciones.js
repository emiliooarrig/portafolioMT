

function calificar(){

    var calificacion = document.getElementById("entrada").value;
    var calif = parseFloat(calificacion);
    
    if(calif < 0 || calif > 10){

        alert("No ingresaste una calificacion válida");
        document.getElementById("entrada").value = "";

    } else{

        if(calif > 0 && calif < 6){
            document.getElementById("resultado").innerHTML = "Calificacion: NA";
        }else if(calif >= 6 && calif < 7.5){
            document.getElementById("resultado").innerHTML = "Calificacion: S";
        } else if(calif >= 7.5 && calif < 9){
            document.getElementById("resultado").innerHTML = "Calificacion: B";
        } else if(calif >= 9 && calif < 10){
            document.getElementById("resultado").innerHTML = "Calificacion: MB";
        } else{
            document.getElementById("resultado").innerHTML = "Calificacion: LAP";
        }
    }

}