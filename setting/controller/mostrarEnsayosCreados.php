<?php
include '../../conexion/conexion.php';

$select_Ensayos = "SELECT 
	Id_Ensayos, 
	Nombre_Sector, 
	Nombre_Categoria, 
	Nombre_Matrices, 
	Nombre_Ensayos, 
	Version, 
	Referencia_Metodo, 
	Fecha_Vigencia_Metodo, 
	Categoria_Confianza, 
	Incertidumbre,
        Tiempo_Entrega_Resultado,
	Estado 
FROM 
	ensayos 
WHERE 
	1";

$resultado = $conexion->query($select_Ensayos);

    $Id_Ensayos=array(); 
    $Nombre_Sector=array(); 
    $Nombre_Categoria=array(); 
    $Nombre_Matrices=array();
    $Nombre_Ensayos=array();
    $Referencia_Metodo=array(); 
    $Fecha_Vigencia_Metodo=array(); 
    $Categoria_Confianza=array();
    $Incertidumbre=array();
    $Tiempo_Entrega_Resultado=array();
    $Estado=array();


while($r = $resultado->fetch_assoc()){
    $Id_Ensayos[]=$r['Id_Ensayos']; 
    $Nombre_Sector[]=$r['Nombre_Sector']; 
    $Nombre_Categoria[]=$r['Nombre_Categoria']; 
    $Nombre_Matrices[]=$r['Nombre_Matrices'];
    $Nombre_Ensayos[]=$r['Nombre_Ensayos'];
    $Referencia_Metodo[]=$r['Referencia_Metodo']; 
    $Fecha_Vigencia_Metodo[]=$r['Fecha_Vigencia_Metodo']; 
    $Categoria_Confianza[]=$r['Categoria_Confianza'];
    $Incertidumbre[]=$r['Incertidumbre'];
    $Tiempo_Entrega_Resultado[]=$r['Tiempo_Entrega_Resultado'];
    $Estado[]=$r['Estado'];

}

$arrayEnvio=array(
    'Id_Ensayos'=>$Id_Ensayos,
    'Nombre_Sector'=>$Nombre_Sector,
    'Nombre_Categoria'=>$Nombre_Categoria,
    'Nombre_Matrices'=>$Nombre_Matrices,
    'Nombre_Ensayos'=>$Nombre_Ensayos,
    'Referencia_Metodo'=>$Referencia_Metodo, 
    'Fecha_Vigencia_Metodo'=>$Fecha_Vigencia_Metodo,
    'Categoria_Confianza'=>$Categoria_Confianza,
    'Incertidumbre'=>$Incertidumbre,
    'Tiempo_Entrega_Resultado'=>$Tiempo_Entrega_Resultado,
    'Estado'=>$Estado
);

echo json_encode($arrayEnvio)


?>