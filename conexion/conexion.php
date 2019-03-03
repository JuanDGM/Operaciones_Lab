<?php

$user="root";
$pass="";
$db="opertlab_db";
$server="localhost";

$conexion = new mysqli($server,$user,$pass,$db);
// por si se generan fallas en la conexion
if($conexion->connect_errno){
   echo "Fallo la conexion". $conexion->connect_errno;
}
// para que apliquen UTF8
$conexion->set_charset("UTF-8");
?>
