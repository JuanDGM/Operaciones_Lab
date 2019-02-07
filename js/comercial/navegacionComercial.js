

function elaborarCotizacion(){
    
    /* Agregar estilos a funcion elaborarCotizacion() */
    document.getElementById('elaborarCotizacionId').style.display='block';
    document.getElementById('subModuloElaborarCotizacion').style.borderTop='2px solid #757575';
    document.getElementById('subModuloElaborarCotizacion').style.borderLeft='2px solid #757575';
    document.getElementById('subModuloElaborarCotizacion').style.borderBottom='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderRight='0px solid';
    
    /* quitar estilos de selección de funcion seguimientoCotizaciones() */
    document.getElementById('containerSeguimientoCotizaciones').style.display='none';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderTop='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderLeft='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderRight='2px solid #757575';
}

function seguimientoCotizaciones(){
    
    /* quitar estilos de selección de funcion elaborarCotizacion() */
    document.getElementById('elaborarCotizacionId').style.display='none';
    document.getElementById('subModuloElaborarCotizacion').style.borderTop='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderLeft='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloElaborarCotizacion').style.borderRight='2px solid #757575';
    
    
    
    /* Agregar estilos a funcion seguimientoCotizaciones() */
    document.getElementById('containerSeguimientoCotizaciones').style.display='block';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderTop='2px solid #757575';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderLeft='2px solid #757575';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderBottom='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderRight='0px solid';
}