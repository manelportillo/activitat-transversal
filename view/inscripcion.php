<!DOCTYPE html>
<html>
  <script src="../js/code_prueba.js"></script>
<style>
input[type=text],[type=email],[type=date], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
<body>

<h3>Formulario de inscripción</h3>

<div>
  <form action="../model/insertar_form.php" method="POST" onsubmit="return validacionForm()">

    <label for="dni" id="dni_label"></label>
    <input type="text" id="dni" name="dni" placeholder="DNI">

    <label for="nombre" id="nombre_label"></label>
    <input type="text" id="nombre" name="nombre" placeholder="Nombre">

    <label for="primer_apellido" id="primer_apellido_label"></label>
    <input type="text" id="primer_apellido" name="primer_apellido" placeholder="Primer apellido">

    <label for="segundo_apellido" id="segundo_apellido_label"></label>
    <input type="text" id="segundo_apellido" name="segundo_apellido" placeholder="Segundo apellido">

    <label for="mail" id="mail_label"></label>
    <input type="email" id="mail" name="mail" placeholder="Email">

    <label for="fecha_nacimiento" id="fecha_nacimiento_label"></label>
    <input type="date" id="fecha_nacimiento" name="fecha_nacimiento">

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
    <input type="submit" value="submit" id="error">
    <div id="mensaje"></div>

  </form>
  
</div>

</body>
</html>
