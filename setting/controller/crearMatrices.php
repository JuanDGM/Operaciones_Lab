<?php
include '../../conexion/conexion.php';

$time= time();
$fecha_Creacion=date('Y-m-d',$time);
$user="Juan David G";

$sectorEconomico = $_POST['sectorEconomico'];
$categoriaMatrices = $_POST['categoriaMatrices'];
$matrices = $_POST['matrices'];


$select_Id="SELECT 
	Id_Categoria, 
	Id_Sector_Economico, 
	Nombre_Sector_Economico, 
	Nombre_Categoria, 
	Fecha_Creacion, 
	Creado_Por, 
	Estado 
FROM 
	categorias_matrices 
WHERE 
	Nombre_Sector_Economico='$sectorEconomico' && Nombre_Categoria='$categoriaMatrices'
GROUP BY
	Nombre_Sector_Economico,
        Nombre_Categoria";

$resultados = $conexion->query($select_Id);

while($r = $resultados->fetch_assoc()){
    $Id_Sector_Economico = $r['Id_Sector_Economico'];
    $Id_Categoria = $r['Id_Categoria'];
}


$insertar_Matrices="INSERT INTO Matrices(
	Id_Sectores, Id_Categorias_Matrices, 
	Nombre_Matriz, Fecha_Creacion, 
	Creado_Por, Estado
) 
VALUES 
	(
		'$Id_Sector_Economico', '$Id_Categoria', '$matrices', 
		'$fecha_Creacion', '$user', 'Activo'
	)";

$conexion->query($insertar_Matrices);
$conexion->close();

?>