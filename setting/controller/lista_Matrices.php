<?php
include '../../conexion/conexion.php';

$IdnombreSector = $_POST['IdnombreSector'];
$IdnombreCategoriaMatrices = $_POST['IdnombreCategoriaMatrices'];

$select_CodId="SELECT 
	Id_Sector_Economico, 
	Id_Categoria, 
	Estado 
FROM 
	categorias_matrices 
WHERE 
	Nombre_Sector_Economico='$IdnombreSector' && Nombre_Categoria='$IdnombreCategoriaMatrices' && Estado='Activo'"; 
	
$resultadoNombres = $conexion->query($select_CodId);

while($r = $resultadoNombres->fetch_assoc()){
    $nombreSectorId = $r['Id_Sector_Economico'];
    $nombreCategoriaId = $r['Id_Categoria'];
}

$select_Matrices="SELECT 
	Id_Matrices, 
	Id_Sectores, 
	Id_Categorias_Matrices, 
	Nombre_Matriz, 
	Fecha_Creacion, 
	Creado_Por, 
	Estado 
FROM 
	matrices 
WHERE 
	Id_Sectores='$nombreSectorId' && Id_Categorias_Matrices='$nombreCategoriaId'";

$resultado = $conexion->query($select_Matrices);

$Nombre_Matriz=array();

while($ListaM = $resultado->fetch_assoc()){
    $Nombre_Matriz[] = $ListaM['Nombre_Matriz'];
}


if($resultado){
    echo json_encode($Nombre_Matriz);
}

?>
