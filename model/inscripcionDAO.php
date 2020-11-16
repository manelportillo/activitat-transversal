<?php
echo '<script src="../js/code_prueba.js"></script>';
class inscripcionDAO{
        private $pdo;

        public function __construct()
        {
            require_once 'conexion.php';
            $this->pdo=$pdo;
        }
    

    public function inscribirse(){
        $dni = $_POST['dni'];
        $nombre = $_POST['nombre'];
        $primer_apellido = $_POST['primer_apellido'];
        $segundo_apellido = $_POST['segundo_apellido'];
        $mail = $_POST['mail'];
        $fecha_nacimiento = $_POST['fecha_nacimiento'];
        $sexo = $_POST['sexo'];
        $categoria = $_POST['categoria'];
        $id_cursa = 1;
        $pagado = "No";

        $query = "SELECT * FROM tbl_participante WHERE DNI_Participante=?";
        $sentencia=$this->pdo->prepare($query);
        $sentencia->bindParam(1,$dni);
        $sentencia->execute();
        $result=$sentencia->fetch(PDO::FETCH_ASSOC);
        $numRow=$sentencia->rowCount();

        if(!empty($numRow) && $numRow==1){   
            header('Location: ../view/inscripcion.php?variable1=1');
        }else{  
            try{
                $this->pdo->beginTransaction(); 
                $query="INSERT INTO tbl_participante (Nombre_Participante, Primer_apellido, Segundo_apellido, Sexo_Participante, Fecha_Nacimiento_Participante, ID_Categoria, DNI_Participante, email_participante) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
                $sentencia=$this->pdo->prepare($query);
                $sentencia->bindParam(1,$nombre);
                $sentencia->bindParam(2,$primer_apellido);
                $sentencia->bindParam(3,$segundo_apellido);
                $sentencia->bindParam(4,$sexo);
                $sentencia->bindParam(5,$fecha_nacimiento);
                $sentencia->bindParam(6,$categoria);
                $sentencia->bindParam(7,$dni);
                $sentencia->bindParam(8,$mail);
                $sentencia->execute();
                $id_participante = $this->pdo->lastInsertId();  
                $query="INSERT INTO tbl_inscripcion (Pagado, ID_Participante, ID_Cursa) VALUES (?, ?, ?)";
                $sentencia=$this->pdo->prepare($query);
                $sentencia->bindParam(1,$pagado);
                $sentencia->bindParam(2,$id_participante);
                $sentencia->bindParam(3,$id_cursa);        
                $sentencia->execute(); 
                $this->pdo->commit(); 
                header ("Location:../view/inscripcion_satisfactoria.php");
            }catch (Exception $ex){
                /* Reconocer un error y no hacer los cambios */
                $this->pdo->rollback();
                echo $ex->getMessage();
            } 
        }
    }
}

?>