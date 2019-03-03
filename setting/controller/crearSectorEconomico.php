<?php
    include '../../conexion/conexion.php';
    
    $time= time();
    $FechaCreacion=date('Y-m-d',$time);
    
    $nombreSector = $_POST['nombreSector'];
    $creadoPor="Juan David Garcia";
    $estado="Activo";
    
    $query_Insertar_NombreSector="INSERT INTO sector_economico(
	Nombre_Sector, Fecha_Creacion, 
	Creado_Por, Estado
) 
VALUES 
	(
		'$nombreSector', '$FechaCreacion', '$creadoPor', 
		'$estado'
	)";
    
    
    $conexion->query($query_Insertar_NombreSector);
    $conexion->close();
    
    echo json_encode("Sector creado correctamente!");
    
?>
