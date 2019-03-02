

function mostrarServicioSolicitado(i){
    
   var MarcoDetalleSolicitadoId = "detalleServicioSolicitadoAprobado"+i;
   var MarcoDetalleSolicitado = "#detalleServicioSolicitadoAprobado"+i;
   
   var esVisible = $(MarcoDetalleSolicitado).is(":visible");
    
    if(esVisible){
        
       document.getElementById(MarcoDetalleSolicitadoId).style.display='none'; 
        
    }else{
       document.getElementById(MarcoDetalleSolicitadoId).style.display='block';
    }
    
}

