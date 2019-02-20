

function desplegarSolicitudRecoleccion(i){
    $(document).ready(function(){
        var celda1 = "#DireccionOcultar"+i;
        var celda2 = "#TelefonoOcultar"+i;
        var celda3 = "#ContactoOcultar"+i;
    
        var fecha = "#FechaId"+i; 
        var planta = "#plantaId"+i;
        
        var esVisible = $(celda1).is(":visible");
    
        if(esVisible){
        
        $(celda1).hide();
        $(celda2).hide();
        $(celda3).hide();
        $(fecha).css("border-bottom","solid 0px #ddd");
        $(planta).css("border-bottom","solid 0px #ddd");
        
        }else{
            
        $(celda1).show();
        $(celda2).show();
        $(celda3).show();
        
        $(fecha).css("border-bottom","solid 1px #ddd");
        $(planta).css("border-bottom","solid 1px #ddd");
        }
    });
}
