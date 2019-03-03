

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
    
}