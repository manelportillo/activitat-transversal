function validacionForm() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var dni=document.getElementById('dni').value;
    // var numDNI = parseInt(dni.substr(0,8),10);
    var nombre=document.getElementById('nombre').value;
    var primer_apellido=document.getElementById('primer_apellido').value;
    var segundo_apellido=document.getElementById('segundo_apellido').value;
    var mail=document.getElementById('mail').value;
    var fecha_nacimiento=document.getElementById('fecha_nacimiento').value;
    var sexo=document.getElementById('sexo').value;
    var categoria=document.getElementById('categoria').value;
    // if (parseInt(dni.substring(0,8))<0) {
    //    alert ("El DNI es incorrecto");
    // }
    // alert(typeof(numDNI));
    // alert(nombre);
    // alert(primer_apellido);
    // alert(segundo_apellido);
    // alert(mail);
    // alert(fecha_nacimiento);
    // alert(sexo);
    // alert(categoria);
    // if((isNaN(parseInt(dni.substr(-1,1))))){
    //     if(letras[dni.substr(0,8)%23]===dni.substr(-1,1)){
    //         alert("NIF correcto")
    //     }else {
    //         alert("La letra del NIF esta mal")
    //     }
    // } else {
    //     alert ("Error debe acabar con letra");
    // }

if (dni == "" || nombre == "" || primer_apellido == "" || segundo_apellido == "" || mail == "" || fecha_nacimiento == "" || sexo == "" || categoria == "" || !letras[dni.substr(0,8)%23]===dni.substr(-1,1)){
    if (dni == ""){   
        // alert ("Dni no introducido");     
        document.getElementById('dni_label').innerHTML="<p>No se ha especificado ningún DNI</p>";
        document.getElementById('nombre_label').innerHTML="";
        document.getElementById('primer_apellido_label').innerHTML="";
        document.getElementById('segundo_apellido_label').innerHTML="";
        document.getElementById('mail_label').innerHTML="";
        document.getElementById('fecha_nacimiento_label').innerHTML="";
        document.getElementById('sexo_label').innerHTML="";
        document.getElementById('categoria_label').innerHTML="";
        document.getElementById('dni').style.border = "2px solid red";
        document.getElementById('nombre').style.border = "2px solid grey";
        document.getElementById('primer_apellido').style.border = "2px solid grey";
        document.getElementById('segundo_apellido').style.border = "2px solid grey";
        document.getElementById('mail').style.border = "2px solid grey";
        document.getElementById('fecha_nacimiento').style.border = "2px solid grey"; 
        document.getElementById('sexo').style.border = "2px solid grey";
        document.getElementById('categoria').style.border = "2px solid grey";        
        document.getElementById('error').style.border = "2px solid blue";
        document.getElementById('error').style.color = "red";
        document.getElementById('dni_label').style.color = "red";
    }else if(!(letras[dni.substr(0,8)%23]===dni.substr(-1,1))){
        document.getElementById('dni_label').innerHTML="<p>DNI Incorrecto</p>";
        document.getElementById('nombre_label').innerHTML="";
        document.getElementById('primer_apellido_label').innerHTML="";
        document.getElementById('segundo_apellido_label').innerHTML="";
        document.getElementById('mail_label').innerHTML="";
        document.getElementById('fecha_nacimiento_label').innerHTML="";
        document.getElementById('sexo_label').innerHTML="";
        document.getElementById('categoria_label').innerHTML="";
        document.getElementById('dni').style.border = "2px solid red";
        document.getElementById('nombre').style.border = "2px solid grey";
        document.getElementById('primer_apellido').style.border = "2px solid grey";
        document.getElementById('segundo_apellido').style.border = "2px solid grey";
        document.getElementById('mail').style.border = "2px solid grey";
        document.getElementById('fecha_nacimiento').style.border = "2px solid grey"; 
        document.getElementById('sexo').style.border = "2px solid grey";
        document.getElementById('categoria').style.border = "2px solid grey";        
        document.getElementById('error').style.border = "2px solid blue";
        document.getElementById('error').style.color = "red";
        document.getElementById('dni_label').style.color = "red";
    }else if(nombre == ""){
        document.getElementById('nombre_label').innerHTML="<p>No se ha especificado ningún nombre</p>";
        document.getElementById('dni_label').innerHTML="";
        document.getElementById('primer_apellido_label').innerHTML="";
        document.getElementById('segundo_apellido_label').innerHTML="";
        document.getElementById('mail_label').innerHTML="";
        document.getElementById('fecha_nacimiento_label').innerHTML="";
        document.getElementById('sexo_label').innerHTML="";
        document.getElementById('categoria_label').innerHTML="";
        document.getElementById('dni').style.border = "2px solid grey";
        document.getElementById('nombre').style.border = "2px solid red";
        document.getElementById('primer_apellido').style.border = "2px solid grey";
        document.getElementById('segundo_apellido').style.border = "2px solid grey";
        document.getElementById('mail').style.border = "2px solid grey";
        document.getElementById('fecha_nacimiento').style.border = "2px solid grey"; 
        document.getElementById('sexo').style.border = "2px solid grey";
        document.getElementById('categoria').style.border = "2px solid grey";        
        document.getElementById('error').style.border = "2px solid blue";
        document.getElementById('error').style.color = "red";
        document.getElementById('nombre_label').style.color = "red";
    }else if(primer_apellido == ""){
        document.getElementById('primer_apellido_label').innerHTML="<p>No se ha especificado ningún apellido</p>";
        document.getElementById('dni_label').innerHTML="";
        document.getElementById('nombre_label').innerHTML="";
        document.getElementById('segundo_apellido_label').innerHTML="";
        document.getElementById('mail_label').innerHTML="";
        document.getElementById('fecha_nacimiento_label').innerHTML="";
        document.getElementById('sexo_label').innerHTML="";
        document.getElementById('categoria_label').innerHTML="";
        document.getElementById('dni').style.border = "2px solid grey";
        document.getElementById('nombre').style.border = "2px solid grey";
        document.getElementById('primer_apellido').style.border = "2px solid red";
        document.getElementById('segundo_apellido').style.border = "2px solid grey";
        document.getElementById('mail').style.border = "2px solid grey";
        document.getElementById('fecha_nacimiento').style.border = "2px solid grey"; 
        document.getElementById('sexo').style.border = "2px solid grey";
        document.getElementById('categoria').style.border = "2px solid grey";        
        document.getElementById('error').style.border = "2px solid blue";
        document.getElementById('error').style.color = "red";
        document.getElementById('primer_apellido_label').style.color = "red";
    }else if(segundo_apellido == ""){
        document.getElementById('segundo_apellido_label').innerHTML="<p>No se ha especificado ningún apellido</p>";
        document.getElementById('dni_label').innerHTML="";
        document.getElementById('primer_apellido_label').innerHTML="";
        document.getElementById('nombre_label').innerHTML="";
        document.getElementById('mail_label').innerHTML="";
        document.getElementById('fecha_nacimiento_label').innerHTML="";
        document.getElementById('sexo_label').innerHTML="";
        document.getElementById('categoria_label').innerHTML="";
        document.getElementById('dni').style.border = "2px solid grey";
        document.getElementById('nombre').style.border = "2px solid grey";
        document.getElementById('primer_apellido').style.border = "2px solid grey";
        document.getElementById('segundo_apellido').style.border = "2px solid red";
        document.getElementById('mail').style.border = "2px solid grey";
        document.getElementById('fecha_nacimiento').style.border = "2px solid grey"; 
        document.getElementById('sexo').style.border = "2px solid grey";
        document.getElementById('categoria').style.border = "2px solid grey";        
        document.getElementById('error').style.border = "2px solid blue";
        document.getElementById('error').style.color = "red";
        document.getElementById('segundo_apellido_label').style.color = "red";
    }else if(mail == ""){
        document.getElementById('mail_label').innerHTML="<p>No se ha especificado ningún email</p>";
        document.getElementById('dni_label').innerHTML="";
        document.getElementById('primer_apellido_label').innerHTML="";
        document.getElementById('segundo_apellido_label').innerHTML="";
        document.getElementById('nombre_label').innerHTML="";
        document.getElementById('fecha_nacimiento_label').innerHTML="";
        document.getElementById('sexo_label').innerHTML="";
        document.getElementById('categoria_label').innerHTML="";
        document.getElementById('dni').style.border = "2px solid grey";
        document.getElementById('nombre').style.border = "2px solid grey";
        document.getElementById('primer_apellido').style.border = "2px solid grey";
        document.getElementById('segundo_apellido').style.border = "2px solid grey";
        document.getElementById('mail').style.border = "2px solid red";
        document.getElementById('fecha_nacimiento').style.border = "2px solid grey"; 
        document.getElementById('sexo').style.border = "2px solid grey";
        document.getElementById('categoria').style.border = "2px solid grey";        
        document.getElementById('error').style.border = "2px solid blue";
        document.getElementById('error').style.color = "red";
        document.getElementById('mail_label').style.color = "red";
    }else if(fecha_nacimiento ==""){
        document.getElementById('fecha_nacimiento_label').innerHTML="<p>Introduce una fecha de nacimiento válida</p>";
        document.getElementById('dni_label').innerHTML="";
        document.getElementById('primer_apellido_label').innerHTML="";
        document.getElementById('segundo_apellido_label').innerHTML="";
        document.getElementById('mail_label').innerHTML="";
        document.getElementById('nombre_label').innerHTML="";
        document.getElementById('sexo_label').innerHTML="";
        document.getElementById('categoria_label').innerHTML="";
        document.getElementById('dni').style.border = "2px solid grey";
        document.getElementById('nombre').style.border = "2px solid grey";
        document.getElementById('primer_apellido').style.border = "2px solid grey";
        document.getElementById('segundo_apellido').style.border = "2px solid grey";
        document.getElementById('mail').style.border = "2px solid grey";
        document.getElementById('fecha_nacimiento').style.border = "2px solid red"; 
        document.getElementById('sexo').style.border = "2px solid grey";
        document.getElementById('categoria').style.border = "2px solid grey";        
        document.getElementById('error').style.border = "2px solid blue";
        document.getElementById('error').style.color = "red";
        document.getElementById('fecha_nacimiento_label').style.color = "red";
    }else if( sexo == ""){
        document.getElementById('sexo_label').innerHTML="<p>No se ha especificado ningún género</p>";
        document.getElementById('dni_label').innerHTML="";
        document.getElementById('primer_apellido_label').innerHTML="";
        document.getElementById('segundo_apellido_label').innerHTML="";
        document.getElementById('mail_label').innerHTML="";
        document.getElementById('fecha_nacimiento_label').innerHTML="";
        document.getElementById('nombre_label').innerHTML="";
        document.getElementById('categoria_label').innerHTML="";
        document.getElementById('dni').style.border = "2px solid grey";
        document.getElementById('nombre').style.border = "2px solid grey";
        document.getElementById('primer_apellido').style.border = "2px solid grey";
        document.getElementById('segundo_apellido').style.border = "2px solid grey";
        document.getElementById('mail').style.border = "2px solid grey";
        document.getElementById('fecha_nacimiento').style.border = "2px solid grey"; 
        document.getElementById('sexo').style.border = "2px solid red";
        document.getElementById('categoria').style.border = "2px solid grey";        
        document.getElementById('error').style.border = "2px solid blue";
        document.getElementById('error').style.color = "red";
        document.getElementById('sexo_label').style.color = "red";
    }else if(categoria == ""){
        document.getElementById('categoria_label').innerHTML="<p>No se ha especificado ninguna categoría</p>";
        document.getElementById('dni_label').innerHTML="";
        document.getElementById('primer_apellido_label').innerHTML="";
        document.getElementById('segundo_apellido_label').innerHTML="";
        document.getElementById('mail_label').innerHTML="";
        document.getElementById('fecha_nacimiento_label').innerHTML="";
        document.getElementById('sexo_label').innerHTML="";
        document.getElementById('nombre_label').innerHTML="";
        document.getElementById('dni').style.border = "2px solid grey";
        document.getElementById('nombre').style.border = "2px solid grey";
        document.getElementById('primer_apellido').style.border = "2px solid grey";
        document.getElementById('segundo_apellido').style.border = "2px solid grey";
        document.getElementById('mail').style.border = "2px solid grey";
        document.getElementById('fecha_nacimiento').style.border = "2px solid grey"; 
        document.getElementById('sexo').style.border = "2px solid grey";
        document.getElementById('categoria').style.border = "2px solid red";        
        document.getElementById('error').style.border = "2px solid blue";
        document.getElementById('error').style.color = "red";
        document.getElementById('categoria_label').style.color = "red";
    }
    return false;
    }else if(letras[dni.substr(0,8)%23]===dni.substr(-1,1)){
        return true;
    }else {
       return false;
    }
}