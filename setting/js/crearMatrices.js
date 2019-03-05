

function crearMatrices(){
    
    var sectorEconomico = document.getElementById('selectSectorDesdeCrearMatrices').value;
    var categoriaMatrices = document.getElementById('selectCategoriaMatrices').value;
    var matrices = document.getElementById('nombreMatrices').value;
    
    
    var datos = {
        'sectorEconomico':sectorEconomico,
        'categoriaMatrices':categoriaMatrices,
        'matrices':matrices
    };
    
    $(document).ready(function(){
        
        $.ajax({
            url:'../controller/crearMatrices.php',
            type:'POST',
            data: datos
            
            
        }).done(function(response){
            
            
        });
        
    });
}

function mostrarMatrices(){
    
    $.ajax({
        url:'../controller/mostrarMatricesCreadas.php',
        type:'POST'
        
    }).done(function(response){
        
        $("#tableMatricesCreadas").empty();
        
        var r =JSON.parse(response);
        
        $("#tableMatricesCreadas").append(
            '<thead>'+
                '<tr>'+
                    '<td>NOMBRE SECTOR ECONOMICO</td>'+
                    '<td>NOMBRE CATEGORIA</td>'+
                    '<td>CODIGO MATRIZ</td>'+
                    '<td>NOMBRE MATRIZ</td>'+
                    '<td>ESTADO</td>'+
                '</tr>'+
            '</thead>'+
            '<tbody>');
    
    for(var i=0;i<r['id_Matriz'].length;i++){
        $("#tableMatricesCreadas").append(    
                '<tr>'+
                  '<td style="text-align:center;">'+r['Nombre_Sector_Economico'][i]+'</td>'+
                  '<td style="text-align:center;">'+r['Nombre_Categoria'][i]+'</td>'+
                  '<td style="text-align:center;">'+r['id_Matriz'][i]+'</td>'+
                  '<td style="text-align:center;">'+r['Nombre_Matriz'][i]+'</td>'+
                  '<td style="text-align:center;">'+r['estado'][i]+'</td>'+
                '</tr>');
        }
            $("#tableMatricesCreadas").append('</tbody>');

        
    });
    
}