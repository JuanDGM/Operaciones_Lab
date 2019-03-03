

function mostrarServicioSolicitado(i){
    
   var MarcoDetalleSolicitadoId = "detalleServicioSolicitadoAprobado"+i;
   var btnMostrarId = "btnMostrarId"+i;
   var MarcoDetalleSolicitado = "#detalleServicioSolicitadoAprobado"+i;
   
   var esVisible = $(MarcoDetalleSolicitado).is(":visible");
    
    if(esVisible){
        
       document.getElementById(MarcoDetalleSolicitadoId).style.display='none'; 
       document.getElementById(btnMostrarId).innerHTML=''; 
       document.getElementById(btnMostrarId).innerHTML='MOSTRAR';
       document.getElementById(btnMostrarId).style.background='#26a69a';
    }else{
       document.getElementById(MarcoDetalleSolicitadoId).style.display='block';
       document.getElementById(btnMostrarId).innerHTML='OCULTAR';
       document.getElementById(btnMostrarId).style.background='red';
    }
    
}

