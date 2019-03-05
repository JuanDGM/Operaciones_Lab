<?php
include '../../conexion/conexion.php';

$nombreSector = $_POST['nombreSector'];

if(count($nombreSector)==0){
    
}else{
    

$select_CategoriasMatrices = "SELECT 
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
	Nombre_Sector_Economico='$nombreSector' && Estado='Activo'";


$resultado = $conexion->query($select_CategoriasMatrices);

$listaCategorias = array();

while($r = $resultado->fetch_assoc()){
    $listaCategorias[] = $r['Nombre_Categoria'];
    
}


echo json_encode($listaCategorias);

} /* fin else */


?>
