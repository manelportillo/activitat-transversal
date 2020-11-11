<!DOCTYPE html>
<html>
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

<h3>Using CSS to style an HTML Form</h3>

<div>
  <form action="/action_page.php">
    <label for="dni">DNI</label>
    <input type="text" id="dni" name="dni" placeholder="DNI">

    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" placeholder="Nombre">

    <label for="primer_apellido">Primer apellido</label>
    <input type="text" id="primer_apellido" name="primer_apellido" placeholder="Primer apellido">

    <label for="segundo_apellido">Segundo apellido</label>
    <input type="text" id="primer_apellido" name="primer_apellido" placeholder="Segundo apellido">

    <label for="mail">Email</label>
    <input type="email" id="mail" name="mail" placeholder="Email">

    <label for="fecha_nacimiento">Fecha nacimiento</label>
    <input type="date" id="primer_apellido" name="primer_apellido" placeholder="Primer apellido">

    <label for="sexo">Sexo</label>
    <select id="sexo" name="sexo">
      <option value="hombre">Hombre</option>
      <option value="mujer">Mujer</option>
      <option value="otro">Otro</option>
    </select>

    <label for="rango_edad">Rango de edad</label>
    <select id="rango_edad" name="rango_edad">
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
    <input type="submit" value="Submit">
  </form>
</div>

</body>
</html>
