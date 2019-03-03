

function submenuMaestrasPortafolio(){
    
    $(document).ready(function(){
    
        var esVisible = $("#subMenuSettingMaestrasPortafolio").is(":visible");
    
        if(esVisible){
            document.getElementById('subMenuSettingMaestrasPortafolio').style.display='none';
        }else{
            document.getElementById('subMenuSettingMaestrasPortafolio').style.display='block';
        }
    
    });
}



function MostrarcrearSectorEconomico(){
    
   document.getElementById('crearSectorEconomicoid').style.display='block';
   document.getElementById('crearCategoriasMatricesid').style.display='none'; 
   document.getElementById('crearMatricesid').style.display='none';
}

function mostrarMarcoCategoriasMatrices(){
   document.getElementById('crearSectorEconomicoid').style.display='none';
   document.getElementById('crearCategoriasMatricesid').style.display='block'; 
   document.getElementById('crearMatricesid').style.display='none'; 
}

function MostrarMarcoMatrices(){
    
   document.getElementById('crearSectorEconomicoid').style.display='none';
   document.getElementById('crearCategoriasMatricesid').style.display='none';
   document.getElementById('crearMatricesid').style.display='block';
    
}

