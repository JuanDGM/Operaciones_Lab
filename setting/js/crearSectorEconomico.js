

function crearSectorEconomico(){
    
    var nombreSectorEconomico = document.getElementById('nombreSectorEconomico').value;
    
    $(document).ready(function(){
        
        var datos={
          'nombreSector': nombreSectorEconomico 
        };
        
        $.ajax({
            url:'../controller/crearSectorEconomico.php',
            type:'POST',
            data:datos
        
        }).done(function(response){
                
                alert(response);
        
        });
    });
}


function mostrarSectorEcomicoCreados(){
    
    $(document).ready(function(){
       
    $.ajax({
        
        url:'../controller/mostrarSectorEconomicoCreados.php',
        type:'POST'
    }).done(function(response){
        
       $("#tableSectoresEconomicosCreados").empty(); 
        
        var r = JSON.parse(response);
        
       $("#tableSectoresEconomicosCreados").append(
            '<thead>'+
                '<tr>'+
                    '<td>CODIGO SECTOR</td>'+
                    '<td>NOMBRE SECTOR ECONOMICO </td>'+
                    '<td>ESTADO</td>'+
                '</tr>'+
            '</thead>'+
            '<tbody>');
    
    for(var i=0;i<r['id'].length;i++){
        $("#tableSectoresEconomicosCreados").append(    
                '<tr>'+
                  '<td style="text-align:center;">'+r['id'][i]+'</td>'+
                  '<td style="text-align:center;">'+r['nombreSector'][i]+'</td>'+
                  '<td style="text-align:center;">'+r['estado'][i]+'</td>'+
                '</tr>');
        }
            $("#tableSectoresEconomicosCreados").append('</tbody>');

        });
        });
    }
