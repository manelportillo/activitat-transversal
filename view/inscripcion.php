<!DOCTYPE html>
<html>
  <script src="../js/code_prueba.js"></script>
  <link rel="stylesheet" href="../css/form.css">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
  <title>Cursa 2021</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<body>
<div class="header">
  <div class="topnav" id="myTopnav">
  <a href="index.html">Home</a>
  <a href="#news">Clasificación 2020</a>
  <a href="#contact">Galeria</a>
  <a href="inscripcion.php" class="active">Inscripciones</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
  </a>
  </div>      
</div>
<div>
  <img class="imgCorredor" src="../images/corredor.png">
    <p id="usuarioExistente" class="usuarioExistente" "> El usuario ya está inscrito </p>
    <form action="../model/insertar_form.php" method="POST" onsubmit="return validacionForm()">
    <h3>Formulario de inscripción</h3>
      <label for="dni" id="dni_label"></label>
      <input class="dni" type="text" id="dni" name="dni" placeholder="DNI">

      <label for="nombre" id="nombre_label"></label>
      <input class="nombre" type="text" id="nombre" name="nombre" placeholder="Nombre">

      <label for="primer_apellido" id="primer_apellido_label"></label>
      <input class="primer_apellido" type="text" id="primer_apellido" name="primer_apellido" placeholder="Primer apellido">

      <label for="segundo_apellido" id="segundo_apellido_label"></label>
      <input class="segundo_apellido" type="text" id="segundo_apellido" name="segundo_apellido" placeholder="Segundo apellido">

      <label for="mail" id="mail_label"></label>
      <input class="mail" type="email" id="mail" name="mail" placeholder="Email">

      <label for="fecha_nacimiento" id="fecha_nacimiento_label"></label>
      <input class="fecha_nacimiento" type="date" id="fecha_nacimiento" name="fecha_nacimiento">

      <label for="sexo" id="sexo_label"></label>
      <select id="sexo" name="sexo">
        <option disabled selected value=""> Selecciona un género </option>
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>
      </select>

      <label for="categoria" id="categoria_label"></label>
      <select id="categoria" name="categoria">
        <option disabled selected value=""> Selecciona una categoria</option>
        <?php
        require_once '../model/conexion.php';
        $query="SELECT ID_Categoria, Nombre_Categoria FROM tbl_categoria";
        $sentencia=$pdo->prepare($query);
        $sentencia->execute();
        $lista_categorias=$sentencia->fetchAll(PDO::FETCH_ASSOC);    
        foreach ($lista_categorias as $categoria){
          echo  '<option value="'.$categoria['ID_Categoria'].'">'.$categoria['Nombre_Categoria'].'</option>'; 
        }
        ?>
      </select>
      <input type="submit" value="Inscribirse" id="error">
      <div id="mensaje"></div>
    </form>
</div>
<?php
if (isset($_GET["variable1"])){
  echo '<script> usuarioExistente(); </script>';
}
?>
 <footer class="footer-distributed">
 
 <div class="footer-left">

 <h3>F1 Online</h3>

 <p class="footer-links">
 <a href="#">Home</a>
·
 <a href="#">Sobre nosotros</a>
·
 <a href="#">FAQ</a>
·
 <a href="#">Contacto</a>
 </p>

 <p class="footer-company-name">F1Online &copy; 2020</p>
 </div>

 <div class="footer-center">

 <div>
 <i class="fa fa-map-marker"></i>
 <p><span>Av. Mare de Déu de Bellvitge</span> Hospitalet, Barcelona</p>
 </div>

 <div>
 <i class="fa fa-phone"></i>
 <p>+34 612 345 678</p>
 </div>

 <div>
 <i class="fa fa-envelope"></i>
 <p><a href="mailto:support@company.com">contact@f1online.com</a></p>
 </div>

 </div>

 <div class="footer-right">

 <p class="footer-company-about">
 <span>Sobre nosotros</span>
     Somos la principal competición automovilística de España, súmate!
 </p>

 <div class="footer-icons">

 <a href="#"><i class="fa fa-facebook"></i></a>
     <a href="#"><i class="fa fa-instagram"></i></a>
     <a href="#"><i class="fa fa-twitter"></i></a>

 </div>

 </div>

     </footer>
     <script>
     function myFunction() {
     var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
         x.className += " responsive";
     } else {
         x.className = "topnav";
     }
     }
     </script>
</body>
</html>
