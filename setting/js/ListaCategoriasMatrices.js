
function ListaCategoriasMatrices(p,idRespAjax){
    
    var identificadorSector = p;
    var identificadorRespAjax = "#"+idRespAjax;
    
    
    var nombreSector = document.getElementById(identificadorSector).value;
    
    var datos = {
      'nombreSector':nombreSector  
    };
    
    $(document).ready(function(){
        
        $.ajax({
            url:'../controller/listaCategoriasMatrices.php',
            type:'POST',
            data: datos
            
        }).done(function(response){
            
            $(identificadorRespAjax).empty();
            
            var r = JSON.parse(response);
            
            for(var i=0; i<r.length;i++){
            $(identificadorRespAjax).append(
                '<option value="'+r[i]+'">'+r[i]+'</option>'    
                );
            }
            $(identificadorRespAjax).formSelect();
        });
    });
}

