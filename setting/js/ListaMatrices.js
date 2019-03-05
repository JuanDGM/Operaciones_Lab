
function listarMatrices(s,c,r){
    
    var IdnombreSector = document.getElementById(s).value;
    var IdnombreCategoriaMatrices = document.getElementById(c).value;
    var IdnombreMatrices = "#"+r;
    
    var datos = {
        'IdnombreSector':IdnombreSector,
        'IdnombreCategoriaMatrices':IdnombreCategoriaMatrices
    };
    
    
    $(document).ready(function(){
        
    $.ajax({
        url:'../controller/lista_Matrices.php',
        type:'POST',
        data:datos
        
    }).done(function(response){
        
        var r = JSON.parse(response);
        
        for(var i=0; i<r.length;i++){
            
            $(IdnombreMatrices).append(
              '<option>'+r[i]+'</option>'  
            );
            
        }
        $(IdnombreMatrices).formSelect();
    });    
        
    });
    
}
