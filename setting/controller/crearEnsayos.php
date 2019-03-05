<?php
include '../../conexion/conexion.php';

    $time= time();
    $fecha_Sistema = date('Y-m-d', $time);
    $user="Juan David G";
    
    $nombreSector = $_POST['nombreSector'];
    $categoriaMatrices = $_POST['categoriaMatrices'];
    $Matrices = $_POST['Matrices'];
    $nombreEnsayo = $_POST['nombreEnsayo'];
    $referenciarMetodo = $_POST['referenciarMetodo'];
    $fechaVigenciaMetodo = $_POST['fechaVigenciaMetodo'];
    $categoriaConfianza = $_POST['categoriaConfianza'];
    $incertidumbre = $_POST['incertidumbre'];
    $Tiempo_Entrega_Resultado = $_POST['Tiempo_Entrega_Resultado'];



$insertar_Ensayo = "INSERT INTO Ensayos(
	Nombre_Sector, Nombre_Categoria, 
	Nombre_Matrices, Nombre_Ensayos, 
	Version, Referencia_Metodo, 
	Fecha_Vigencia_Metodo, Categoria_Confianza, 
	Incertidumbre,Tiempo_Entrega_Resultado, Fecha_Creacion, 
	Creado_Por, Estado
) 
VALUES 
	(
		'$nombreSector', '$categoriaMatrices', '$Matrices', 
		'$nombreEnsayo', '1', '$referenciarMetodo', 
		'$fechaVigenciaMetodo', '$categoriaConfianza', '$incertidumbre', 
		'$Tiempo_Entrega_Resultado','$fecha_Sistema', '$user', 'Activo'
	)";

$resultado = $conexion->query($insertar_Ensayo);

$conexion->close();

if($resultado){
    echo json_encode("Ensayo creado correctamente!");
}

?>