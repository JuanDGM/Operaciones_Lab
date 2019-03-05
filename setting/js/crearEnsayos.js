

function crearEnsayos(){
    
    var nombreSector = document.getElementById('selectSectorDesdeCrearEnsayos').value;
    var categoriaMatrices = document.getElementById('selectCategoriaMatricesDisplayCrearEnsayos').value;
    var Matrices = document.getElementById('selectMatricesDisplayCrearEnsayos').value;
    var nombreEnsayo =  document.getElementById('nombreEnsayo').value;
    var referenciarMetodo = document.getElementById('ReferenciaMetodo').value;
    var fechaVigenciaMetodo = document.getElementById('FechaVigenciaMetodo').value;
    var categoriaConfianza = document.getElementById('Categoria_Confianza').value;
    var incertidumbre = document.getElementById('IncertidumbreEstimada').value;
    var Tiempo_Entrega_Resultado = document.getElementById('Tiempo_Entrega_Resultado').value;
    
    
    var datos={
    'nombreSector':nombreSector,
    'categoriaMatrices':categoriaMatrices,
    'Matrices':Matrices,
    'nombreEnsayo':nombreEnsayo,
    'referenciarMetodo':referenciarMetodo,
    'fechaVigenciaMetodo':fechaVigenciaMetodo,
    'categoriaConfianza':categoriaConfianza,
    'incertidumbre':incertidumbre,
    'Tiempo_Entrega_Resultado':Tiempo_Entrega_Resultado
    };
    $(document).ready(function(){
        
        $.ajax({
            url:'../controller/crearEnsayos.php',
            type:'POST',
            data: datos
            
        }).done(function(response){
            
            alert(response);
            
        });
    
    });
}

function mostrarEnsayosCreados(){
    
    $(document).ready(function(){
        
        $.ajax({
            url:'../controller/mostrarEnsayosCreados.php',
            type:'POST'
            
        }).done(function(response){
            
            var r = JSON.parse(response);
            
          $("#tableEnsayosCreados").empty();
            
            $("#tableEnsayosCreados").append(
            '<thead>'+
                '<tr>'+
                    '<td>ID ENSAYO</td>'+
                    '<td>NOMBRE ENSAYO</td>'+
                    '<td>METODO ENSAYO</td>'+
                    '<td>NOMBRE SECTOR ECONOMICO</td>'+
                    '<td>NOMBRE CATEGORIA</td>'+
                    '<td>NOMBRE MATRIZ</td>'+
                    '<td>TIEMPO ENTREGA</td>'+
                    '<td>ESTADO</td>'+
                '</tr>'+
            '</thead>'+
            '<tbody>');
            
            for(var i=0;i<r['Id_Ensayos'].length;i++){
              
            $("#tableEnsayosCreados").append(  
                '<tr>'+
                    '<td>'+r['Id_Ensayos']+'</td>'+
                    '<td>'+r['Nombre_Ensayos']+'</td>'+
                    '<td>'+r['Referencia_Metodo']+'</td>'+
                    '<td>'+r['Nombre_Sector']+'</td>'+
                    '<td>'+r['Nombre_Categoria']+'</td>'+
                    '<td>'+r['Nombre_Matrices']+'</td>'+
                    '<td>'+r['Tiempo_Entrega_Resultado']+'</td>'+
                    '<td>'+r['Estado']+'</td>'+
                '</tr>');
                
            }
          
            $("#tableEnsayosCreados").append('</tbody>');
            
        });
        
    });
    
}


