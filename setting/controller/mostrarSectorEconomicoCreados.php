<?php
include '../../conexion/conexion.php';

$mostrarSectorEconomicoCreados="SELECT 
	Id, 
	Nombre_Sector, 
	Fecha_Creacion, 
	Creado_Por, 
	Estado
FROM 
	sector_economico 
WHERE 
	1";

$respuesta = $conexion->query($mostrarSectorEconomicoCreados);

$id=array();
$nombreSector=array();
$estado=array();

while($valSectoresEconomicos=$respuesta->fetch_assoc()){
    $id[] = $valSectoresEconomicos['Id'];
    $nombreSector[] = $valSectoresEconomicos['Nombre_Sector'];
    $estado[] = $valSectoresEconomicos['Estado'];
}

$arraySector=array(
        'id'=>$id,
        'nombreSector'=>$nombreSector,
        'estado'=>$estado
    );

echo json_encode($arraySector);

?>

