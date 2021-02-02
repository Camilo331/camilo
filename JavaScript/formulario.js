var nombre = document.getElementById('_name'); /* Establece una variable con el id del input */
var correo = document.getElementById('_gmail'); /* Establece una variable con el id del input */
var telefono = document.getElementById('_phone'); /* Establece una variable con el id del input */



function enviarformulario() {
    console.log('enviar formulario');

    if (nombre.value.length <= 0 || correo.value.length <= 0 || telefono.value.length <= 0){
        swal ( "¡ Ingrese Datos! " , "¡ Nombre, Correo, Telefono! " , " éxito " )   ;
        
    }

}