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
    // alert(dni);
    // alert(nombre);
    // alert(primer_apellido);
    // alert(segundo_apellido);
    // alert(mail);
    // alert(fecha_nacimiento);
    // alert(sexo);
    // alert(categoria);
    if (dni == ''){      
        document.getElementById('dni_label').style.color="red";
        document.getElementById('dni').style.border = "2px solid red";       

    }

    if(!(letras[dni.substr(0,8)%23]===dni.substr(-1,1))){
        document.getElementById('dni').style.border = "2px solid red";
        }
    if(nombre == ""){
        document.getElementById('nombre').style.border = "2px solid red";  
        }
    if(primer_apellido == ""){
        document.getElementById('primer_apellido').style.border = "2px solid red";  
        }
    if(segundo_apellido == ""){
        document.getElementById('segundo_apellido').style.border = "2px solid red";  
        }
    if(mail == ""){
        document.getElementById('mail').style.border = "2px solid red";  
        }
    if(fecha_nacimiento ==""){
        document.getElementById('fecha_nacimiento').style.border = "2px solid red";  
        }
    if( sexo == ""){
        
        document.getElementById('sexo').style.border = "2px solid red";  
        }
    if(categoria == ""){
        
        document.getElementById('dni_label').style.color="red";
        document.getElementById('categoria').style.border = "2px solid red";  
    }

    if (dni == "" || nombre == "" || primer_apellido == "" || segundo_apellido == "" || mail == "" || fecha_nacimiento == "" || sexo == "" || categoria == "" || !letras[dni.substr(0,8)%23]===dni.substr(-1,1)){
        document.getElementById('dni_label').innerHTML="<p>Falta introducir datos</p>";
        document.getElementById('dni_label').style.color="red";
        return false;
    }else{
        return true;
    }
    
}