
function mostrarPortafolio(){
    
    var sectorId =document.getElementById('sectorId').value;
    var categoriaMatrizId = document.getElementById('categoriaMatrizId').value;
    var MatrizId = document.getElementById('MatrizId').value;
    var codigoEnsayoId = document.getElementById('codigoEnsayoId').value;
    var EnsayoId = document.getElementById('EnsayoId').value;
    var nivelCalidadId = document.getElementById('nivelCalidadId').value;
    
    var datos = {
        'sectorId':sectorId,
        'categoriaMatrizId':categoriaMatrizId,
        'MatrizId':MatrizId,
        'codigoEnsayoId':codigoEnsayoId,
        'EnsayoId':EnsayoId,
        'nivelCalidadId':nivelCalidadId
    };
    
    $(document).ready(function(){
        
        $.ajax({
            url:'../controller/mostrarPortafolio.php',
            type:'POST',
            data: datos
        
        }).done(function(response){
            
            $("#contenedorMostrarPortafolio").append(
            '<div class="titulosTablaPortafolio">'+
            '<div style="width:10%;border:1px solid #ddd;box-sizing:border-box;">ID ENSAYO</div>'+
            '<div style="width:20%;border:1px solid #ddd;box-sizing:border-box;">NOMBRE ENSAYO</div>'+
            '<div style="width:20%;border:1px solid #ddd;box-sizing:border-box;">MÉTODO</div>'+
            '<div style="width:20%;border:1px solid #ddd;box-sizing:border-box;">MATRIZ</div>'+
            '<div style="width:10%;border:1px solid #ddd;box-sizing:border-box;">TIEMPO ENTREGA</div>'+
            '<div style="width:10%;border:1px solid #ddd;box-sizing:border-box;">NIVEL DE CALIDAD</div>'+
            '<div style="width:10%;border:1px solid #ddd;box-sizing:border-box;">PRECIO</div>'+
            '</div>');
            
            
            
        });
    });
}
