<?php
include '../../conexion/conexion.php';

$mostrarCategoriasCreadas = "SELECT 
	Id_Categoria, 
	Nombre_Sector_Economico, 
	Nombre_Categoria, 
	Estado 
FROM 
	categorias_matrices 
WHERE 
	1";

$resultado = $conexion->query($mostrarCategoriasCreadas);

$NombreSector = array();
$idCategoria = array();
$NombreSector = array();
$Estado = array();

while($mostrarCategoria = $resultado->fetch_assoc()){
    $NombreSector[] = $mostrarCategoria['Nombre_Sector_Economico'];
    $idCategoria[] = $mostrarCategoria['Id_Categoria'];
    $NombreCategoria[] = $mostrarCategoria['Nombre_Categoria'];
    $Estado[]=$mostrarCategoria['Estado'];
}

$arrayCategoria = array(
    'NombreSector'=>$NombreSector,
    'idCategoria'=>$idCategoria,
    'NombreCategoria'=>$NombreCategoria,
    'estado'=>$Estado
);

echo json_encode($arrayCategoria);

?>
