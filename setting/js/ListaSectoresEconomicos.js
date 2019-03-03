

function generarListaSectoresEconomicos(i){
    
    var identificadorElemento = "#"+i;
    
    
    $(document).ready(function(){
        
        $.ajax({
            url:'../controller/listaSectoresEconomicos.php',
            type:'POST'
        }).done(function(response){
            
            var r = JSON.parse(response);
            
            for(var i=0;i<r['nombreSector'].length;i++){
                
            $(identificadorElemento).append(
                      '<option value="'+r['nombreSector'][i]+'">'+r['nombreSector'][i]+'</option>'
                );
            $(identificadorElemento).formSelect();
            }
        });
    });
}
