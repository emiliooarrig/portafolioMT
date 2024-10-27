

function Factorial() {

    var entradaString = document.getElementById("input").value;
    var numero = parseInt(entradaString);
    calcularFactorial(numero);
}


function calcularFactorial(num) {
    
    if (num < 0) {
        alert("No hay factorial definido para ese numero");
    } else if (num == 1) {
        document.getElementById("resultado").innerHTML = "1";
    } else {
    
        var f = 1;
    
        for (var i = 1; i <= num; i++) {
            f = f * i;
        }
    
        document.getElementById("resultado").innerHTML = "El factorial es: " + f;

    }
    


}