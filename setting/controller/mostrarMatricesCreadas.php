<?php
include '../../conexion/conexion.php';

$select_matrices = "SELECT 
    m.Id_Matrices, 
    m.Nombre_Matriz, 
    m.Id_Sectores, 
    c.Nombre_Sector_Economico,
    m.Id_Categorias_Matrices, 
    c.Nombre_Categoria,
    m.Estado
FROM 
	matrices AS m LEFT JOIN categorias_matrices AS c ON m.Id_Sectores=c.Id_Sector_Economico AND m.Id_Categorias_Matrices = c.Id_Categoria
WHERE 
	1";

$resultado = $conexion->query($select_matrices);


$Id_Matrices=array();
$Nombre_Matriz=array();
$Nombre_Sector_Economico=array();
$Nombre_Categoria=array();
$estado=array();

while($r = $resultado->fetch_assoc()){
    $Id_Matrices[] = $r['Id_Matrices'];
    $Nombre_Matriz[] = $r['Nombre_Matriz'];
    $Nombre_Sector_Economico[] = $r['Nombre_Sector_Economico'];
    $Nombre_Categoria[] = $r['Nombre_Categoria'];
    $estado[] = $r['Estado'];
}

$array_Respuesta = array(
    'id_Matriz'=>$Id_Matrices,
    'Nombre_Matriz'=>$Nombre_Matriz,
    'Nombre_Sector_Economico'=>$Nombre_Sector_Economico,
    'Nombre_Categoria'=>$Nombre_Categoria,
    'estado'=>$estado
);

echo json_encode($array_Respuesta);

?>
