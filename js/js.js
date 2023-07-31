const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault()
    const FA = new Date();
    const FN = new Date(document.getElementById('anio').value, document.getElementById('mes').value, document.getElementById('dia').value);
    let edadanio = FA.getFullYear() - FN.getFullYear();
    let difmeses = FA.getMonth() - FN.getMonth();
    if(difmeses < 0 || (difmeses === 0 && FA.getDate() < FN.getDate())) {
        edadanio--;
    }
    if(edadanio >= 18){
        alert('Nombre: ' + document.getElementById('nombre').value + '\nApellido: ' + document.getElementById('apellidos').value + '\nCiudad: ' + document.getElementById('ciudad').value + '\nEdad: ' + edadanio);
    }
    else{
        alert('Error: Menor de edad')
    }
})