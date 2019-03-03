
function crearCategoriaMatrices(){
    
    var nombreSector = document.getElementById('selectSectorDesdeCrearCategoria').value;
    var categoria = document.getElementById('nombreCategoriaMatrices').value;
    
    var datos = {
      'nombreSector':nombreSector,
      'categoriaMatrices':categoria
    };
    
    $(document).ready(function(){
        
        $.ajax({
            url:'../controller/crearCategoriaMatrices.php',
            type:'POST',
            data:datos
            
        }).done(function(response){
            
            
        });
        
        
    });
    
}


function mostrarCategoriasMatricesCreadas(){
    
    $(document).ready(function(){
       
    $.ajax({
        
        url:'../controller/mostrarCategoriasMatricesCreadas.php',
        type:'POST'
    }).done(function(response){
        
        var r = JSON.parse(response);
        
       $("#tableCategoriasCreadas").append(
            '<thead>'+
                '<tr>'+
                    '<td>NOMBRE SECTOR ECONOMICO</td>'+
                    '<td>CODIGO CATEGORIA</td>'+
                    '<td>NOMBRE CATEGORIA</td>'+
                    '<td>ESTADO</td>'+
                '</tr>'+
            '</thead>'+
            '<tbody>');
    
    for(var i=0;i<r['NombreSector'].length;i++){
        $("#tableCategoriasCreadas").append(    
                '<tr>'+
                  '<td style="text-align:center;">'+r['NombreSector'][i]+'</td>'+
                  '<td style="text-align:center;">'+r['idCategoria'][i]+'</td>'+
                  '<td style="text-align:center;">'+r['NombreCategoria'][i]+'</td>'+
                  '<td style="text-align:center;">'+r['estado'][i]+'</td>'+
                '</tr>');
        }
            $("#tableCategoriasCreadas").append('</tbody>');

        });
        });
    }

