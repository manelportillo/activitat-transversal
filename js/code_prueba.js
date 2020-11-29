function usuarioExistente(){
    // alert("hola");
    document.getElementById("usuarioExistente").className="usuarioExistenteVisible";
}

function validacionForm(event){
    // alert('hola');
    var inputs = document.getElementsByTagName("input");
    var vali = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'text' && inputs[i].value == '') {
            inputs[i].style.borderColor = 'red';
            vali = false;
            document.getElementById("mensaje2").innerHTML="<p>Faltan datos por introducir</p>";
            document.getElementById("mensaje2").style.color="red";
        } else if (inputs[i].type == 'email' && inputs[i].value == ''){
            inputs[i].style.borderColor = 'red';
            vali = false;
            document.getElementById("mensaje2").innerHTML="<p>Faltan datos por introducir</p>";
            document.getElementById("mensaje2").style.color="red";
        } else if (inputs[i].type == 'date' && inputs[i].value == ''){
            inputs[i].style.borderColor = 'red';
            vali = false;
            document.getElementById("mensaje2").innerHTML="<p>Faltan datos por introducir</p>";
            document.getElementById("mensaje2").style.color="red";
        } else {
            inputs[i].style.borderColor = 'grey';
           
        }
        // console.log(inputs[i].type);
    }
        if (!validarDNI() || !vali) {
            event.preventDefault()
        }

}

function categoria(){
        
    var fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    // console.log(fecha_nacimiento);

    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    var categoria = document.getElementById("sexo").value;

    console.log(categoria);
    if(edad >= 0 && edad <=6 ){
        document.getElementById("mensaje3").innerHTML= "<p>Categoria: 0-6 Años Niños/Niñas</p>";
    }
    if(edad >= 6 && edad <=12 ){
        document.getElementById("mensaje3").innerHTML= "<p>Categoria: 6-12 Años Niños/Niñas</p>";
    }
    if(edad >= 12 && edad <=16 && categoria == "hombre"){
        document.getElementById("mensaje3").innerHTML= "<p>Categoria: 12-16 Años Hombre</p>";
    }
    if(edad >= 16 && edad <=45 && categoria == "hombre"){
        document.getElementById("mensaje3").innerHTML= "<p>Categoria: 16-45 Años Hombre</p>";
    }
    if(edad >= 45 && edad <=65 && categoria == "hombre"){
        document.getElementById("mensaje3").innerHTML= "<p>Categoria: 45-65 Años Hombre</p>";
    }
    if(edad >= 65 && edad <=1000 && categoria == "hombre"){
        document.getElementById("mensaje3").innerHTML= "<p>Categoria: Mayor 65 Años Hombre</p>";
    }

    if(edad >= 12 && edad <=16 && categoria == "mujer"){
        document.getElementById("mensaje3").innerHTML= "<p>Categoria: 12-16 Años Mujer</p>";
    }
    if(edad >= 16 && edad <=45 && categoria == "mujer"){
        document.getElementById("mensaje3").innerHTML= "<p>Categoria: 16-45 Años Mujer</p>";
    }
    if(edad >= 45 && edad <=65 && categoria == "mujer"){
        document.getElementById("mensaje3").innerHTML= "<p>Categoria: 45-65 Años Mujer</p>";
    }
    if(edad >= 65 && edad <=1000 && categoria == "mujer"){
        document.getElementById("mensaje3").innerHTML= "<p>Categoria: Mayor 65 Años Mujer</p>";
    }

}


function validarDNI() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var dni=document.getElementById('dni').value;
    if(!(letras[dni.substr(0,8)%23]===dni.substr(-1,1))){
        document.getElementById('dni').style.border = "1px solid red";
        document.getElementById("mensaje1").innerHTML="<p>DNI Incorrecto</p>";
        document.getElementById("mensaje1").style.color="red";
    }else{
        document.getElementById("mensaje1").innerHTML="";
        document.getElementById('dni').style.border = "1px solid grey";
        return true;

    }
    
}
