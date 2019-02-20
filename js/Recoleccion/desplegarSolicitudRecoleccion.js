

function desplegarSolicitudRecoleccion(i){
    
    $(document).ready(function(){
        var celda1 = "#DireccionOcultar"+i;
        var celda2 = "#TelefonoOcultar"+i;
        var celda3 = "#ContactoOcultar"+i;
        
        var esVisible = $(celda1).is(":visible");
    if(esVisible){
        
        $(celda1).hide();
        $(celda2).hide();
        $(celda3).hide();
        
    }else{
        $(celda1).show();
        $(celda2).show();
        $(celda3).show();
    }
    });
    
    
}
