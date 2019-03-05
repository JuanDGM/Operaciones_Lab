<?php
include '../conexion/conexion.php';

        $sectorId = $_POST['sectorId'];
        $categoriaMatrizId = $_POST['categoriaMatrizId'];
        $MatrizId = $_POST['MatrizId'];
        $codigoEnsayoId = $_POST['codigoEnsayoId'];
        $EnsayoId = $_POST['EnsayoId'];
        $nivelCalidadId = $_POST['nivelCalidadId'];

        
        if($sectorId!=""){
            $filtroSector="Nombre_Sector='$sectorId'";
        }else{
            $filtroSector=1;
        }
        
        if($categoriaMatrizId!=""){
            
            $filtroCategoriaMatriz="Nombre_Categoria='$categoriaMatrizId'";
        }else{
            $filtroCategoriaMatriz=1;
        }
        
        if($MatrizId!=""){
            $filtroMatriz="Nombre_Matrices='$MatrizId'";
        }else{
            $filtroMatriz=1;
        }
        
        if($codigoEnsayoId!=""){
            $filtroCodigoEnsayo="Id_Ensayos='$codigoEnsayoId'";
        }else{
            $filtroCodigoEnsayo=1;
        }
        
        if($EnsayoId!=""){
            $filtroEnsayo = "Nombre_Ensayos='$EnsayoId'";
        }else{
            $filtroEnsayo = 1;
        }
        if($nivelCalidadId!=""){
            $filtroCategoriaConfianza = "Categoria_Confianza='$nivelCalidadId'";
        }else{
            $filtroCategoriaConfianza = 1;
        }
        
$select_Portafolio="SELECT 
	Id_Ensayos, 
	Nombre_Sector, 
	Nombre_Categoria, 
	Nombre_Matrices, 
	Nombre_Ensayos, 
	Referencia_Metodo, 
	Categoria_Confianza, 
	Tiempo_Entrega_Resultado 
FROM 
	ensayos
WHERE 
	$filtroSector && $filtroCategoriaMatriz && $filtroMatriz && $filtroCodigoEnsayo 
        && $filtroEnsayo && $filtroCategoriaConfianza && Estado='Activo'";

$resultado = $conexion->query($select_Portafolio);

    $Id_Ensayos=array(); 
    $Nombre_Sector=array(); 
    $Nombre_Categoria=array(); 
    $Nombre_Matrices=array(); 
    $Nombre_Ensayos=array(); 
    $Referencia_Metodo=array(); 
    $Categoria_Confianza=array(); 
    $Tiempo_Entrega_Resultado=array(); 


while($r = $resultado->fetch_assoc()){
    $Id_Ensayos[]=$r['Id_Ensayos']; 
    $Nombre_Sector[]=$r['Nombre_Sector']; 
    $Nombre_Categoria[]=$r['Nombre_Categoria']; 
    $Nombre_Matrices[]=$r['Nombre_Matrices']; 
    $Nombre_Ensayos[]=$r['Nombre_Ensayos']; 
    $Referencia_Metodo[]=$r['Referencia_Metodo']; 
    $Categoria_Confianza[]=$r['Categoria_Confianza']; 
    $Tiempo_Entrega_Resultado[]=$r['Tiempo_Entrega_Resultado'];
}

$arrayRespuesta = array(
    'Id_Ensayos'=>$Id_Ensayos,
    'Nombre_Sector'=>$Nombre_Sector,
    'Nombre_Categoria'=>$Nombre_Categoria,
    'Nombre_Matrices'=>$Nombre_Matrices,
    'Nombre_Ensayos'=>$Nombre_Ensayos,
    'Referencia_Metodo'=>$Referencia_Metodo, 
    'Categoria_Confianza'=>$Categoria_Confianza, 
    'Tiempo_Entrega_Resultado'=>$Tiempo_Entrega_Resultado
);

echo json_encode($arrayRespuesta);

?>
