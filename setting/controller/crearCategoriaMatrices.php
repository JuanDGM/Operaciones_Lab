<?php
include '../../conexion/conexion.php';

$time= time();
$fechaRegistro=date('Y-m-d',$time);
$usuario="Juan David G";
$estado="Activo";
$nombreSector=$_POST['nombreSector'];
$categoriaMatrices=$_POST['categoriaMatrices'];

$seleccion_Cod_Sector="SELECT 
	Id 
FROM 
	sector_economico 
WHERE 
	Nombre_Sector='$nombreSector'";

$resultado = $conexion->query($seleccion_Cod_Sector);

while($r=$resultado->fetch_assoc()){
    $codSector = $r[Id];
}

$insertar_Categoria_Matrices="INSERT INTO categorias_matrices(
	Id_Sector_Economico, 
	Nombre_Sector_Economico, Nombre_Categoria, 
	Fecha_Creacion, Creado_Por, 
	Estado
) 
VALUES 
	(
		'$codSector', '$nombreSector', '$categoriaMatrices', 
		'$fechaRegistro', '$usuario', '$estado'
	)";

$conexion->query($insertar_Categoria_Matrices);

$conexion->close();
?>