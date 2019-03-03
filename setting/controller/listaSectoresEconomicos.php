<?php

include '../../conexion/conexion.php';

$mostrar_Sectores_Economicos="SELECT 
	Id,
        Nombre_Sector, 
	Fecha_Creacion, 
	Creado_Por, 
	Estado 
FROM 
	sector_economico 
WHERE 
	Estado='Activo'";

$resultado = $conexion->query($mostrar_Sectores_Economicos);

$listaSectores = array();

while($r = $resultado->fetch_assoc()){
    $listaSectores[] = $r['Nombre_Sector'];
}

$array=array('nombreSector'=>$listaSectores);

echo json_encode($array);

?>

