function mostrarDatos() {

    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var edad = document.getElementById('edad').value;
    var genero = document.querySelector('input[name="genero"]:checked').value;
    var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    var colorFavorito = document.getElementById('color_favorito').value;

    var resultado = `
        Nombre: ${nombre}<br>
        Correo: ${correo}<br>
        Edad: ${edad}<br>
        Género: ${genero}<br>
        Fecha de Nacimiento: ${fechaNacimiento}<br>
        Color Favorito: <span style="color:${colorFavorito};">${colorFavorito}</span>
    `;
    document.getElementById('resultado').innerHTML = resultado;
}
