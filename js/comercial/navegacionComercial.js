
/* este fichero contiene las funciones para realizar 
 * la navegacion en el modulo de gestión comercial*/

function resultadosComerciales(){
    /* Agregar estilos a funcion elaborarCotizacion() */
    document.getElementById('containerResultadosComercialesId').style.display='block';
    document.getElementById('subModuloresultadosComerciales').style.borderTop='2px solid #757575';
    document.getElementById('subModuloresultadosComerciales').style.borderLeft='2px solid #757575';
    document.getElementById('subModuloresultadosComerciales').style.borderBottom='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderRight='0px solid';
    
    /* Quitar estilos a funcion elaborarCotizacion() */
    document.getElementById('elaborarCotizacionId').style.display='none';
    document.getElementById('subModuloElaborarCotizacion').style.borderTop='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderLeft='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloElaborarCotizacion').style.borderRight='2px solid #757575';
    
    /* quitar estilos de selección de funcion seguimientoCotizaciones() */
    document.getElementById('containerSeguimientoCotizaciones').style.display='none';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderTop='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderLeft='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a Portafolio() (btn submodulo) */
    document.getElementById('containerPortafolioId').style.display='none';
    document.getElementById('crearPortafolioId').style.display='none';
    document.getElementById('subModuloPortafolio').style.borderTop='0px solid';
    document.getElementById('subModuloPortafolio').style.borderLeft='0px solid';
    document.getElementById('subModuloPortafolio').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloPortafolio').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a crearClientes() */
    document.getElementById('containerClientesId').style.display='none';
    document.getElementById('subModuloCrearCliente').style.borderTop='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearCliente').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a CrearOfertas() */
    document.getElementById('containerCrearOfertasId').style.display='none';
    document.getElementById('subModuloCrearOfertas').style.borderTop='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearOfertas').style.borderRight='2px solid #757575';

    /* Quitar estilos a metasComerciales() */
    document.getElementById('containerMetasComercialesId').style.display='none';
    document.getElementById('subModuloMetasComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloMetasComerciales').style.borderRight='2px solid #757575';
    
    
}

function elaborarCotizacion(){
    /* Quitar estilos a funcion elaborarCotizacion() */
    document.getElementById('containerResultadosComercialesId').style.display='none';
    document.getElementById('subModuloresultadosComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloresultadosComerciales').style.borderRight='2px solid #757575';
    
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
    
    /* Quitar estilos a Portafolio() (btn submodulo) */
    document.getElementById('containerPortafolioId').style.display='none';
    document.getElementById('crearPortafolioId').style.display='none';
    document.getElementById('subModuloPortafolio').style.borderTop='0px solid';
    document.getElementById('subModuloPortafolio').style.borderLeft='0px solid';
    document.getElementById('subModuloPortafolio').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloPortafolio').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a crearClientes() */
    document.getElementById('containerClientesId').style.display='none';
    document.getElementById('subModuloCrearCliente').style.borderTop='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearCliente').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a CrearOfertas() */
    document.getElementById('containerCrearOfertasId').style.display='none';
    document.getElementById('subModuloCrearOfertas').style.borderTop='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearOfertas').style.borderRight='2px solid #757575';

    /* Quitar estilos a metasComerciales() */
    document.getElementById('containerMetasComercialesId').style.display='none';
    document.getElementById('subModuloMetasComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloMetasComerciales').style.borderRight='2px solid #757575';
}

function seguimientoCotizaciones(){
    /* Quitar estilos a funcion elaborarCotizacion() */
    document.getElementById('containerResultadosComercialesId').style.display='none';
    document.getElementById('subModuloresultadosComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloresultadosComerciales').style.borderRight='2px solid #757575';
    
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

    /* Quitar estilos a Portafolio() (btn submodulo) */
    document.getElementById('containerPortafolioId').style.display='none';
    document.getElementById('crearPortafolioId').style.display='none';
    document.getElementById('subModuloPortafolio').style.borderTop='0px solid';
    document.getElementById('subModuloPortafolio').style.borderLeft='0px solid';
    document.getElementById('subModuloPortafolio').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloPortafolio').style.borderRight='2px solid #757575';

    /* Quitar estilos a crearClientes() */
    document.getElementById('containerClientesId').style.display='none';
    document.getElementById('subModuloCrearCliente').style.borderTop='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearCliente').style.borderRight='2px solid #757575';

    /* Quitar estilos a CrearOfertas() */
    document.getElementById('containerCrearOfertasId').style.display='none';
    document.getElementById('subModuloCrearOfertas').style.borderTop='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearOfertas').style.borderRight='2px solid #757575';

    /* Quitar estilos a metasComerciales() */
    document.getElementById('containerMetasComercialesId').style.display='none';
    document.getElementById('subModuloMetasComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloMetasComerciales').style.borderRight='2px solid #757575';
}


function Portafolio(){
    /* Quitar estilos a funcion elaborarCotizacion() */
    document.getElementById('containerResultadosComercialesId').style.display='none';
    document.getElementById('subModuloresultadosComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloresultadosComerciales').style.borderRight='2px solid #757575';
    
    /* quitar estilos de selección de funcion elaborarCotizacion() */
    document.getElementById('elaborarCotizacionId').style.display='none';
    document.getElementById('subModuloElaborarCotizacion').style.borderTop='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderLeft='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloElaborarCotizacion').style.borderRight='2px solid #757575';
    
    /* quitar estilos a funcion seguimientoCotizaciones() */
    document.getElementById('containerSeguimientoCotizaciones').style.display='none';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderTop='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderLeft='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderRight='2px solid #757575';
    
    /* Agregar estilos a Portafolio() (btn submodulo) */
    document.getElementById('containerPortafolioId').style.display='block';
    document.getElementById('subModuloPortafolio').style.borderTop='2px solid #757575';
    document.getElementById('subModuloPortafolio').style.borderLeft='2px solid #757575';
    document.getElementById('subModuloPortafolio').style.borderBottom='0px solid';
    document.getElementById('subModuloPortafolio').style.borderRight='0px solid';
    
    /* Quitar estilos a crearClientes() */
    document.getElementById('containerClientesId').style.display='none';
    document.getElementById('subModuloCrearCliente').style.borderTop='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearCliente').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a CrearOfertas() */
    document.getElementById('containerCrearOfertasId').style.display='none';
    document.getElementById('subModuloCrearOfertas').style.borderTop='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearOfertas').style.borderRight='2px solid #757575';

    /* Quitar estilos a metasComerciales() */
    document.getElementById('containerMetasComercialesId').style.display='none';
    document.getElementById('subModuloMetasComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloMetasComerciales').style.borderRight='2px solid #757575';
}


function crearClientes(){
    /* Quitar estilos a funcion elaborarCotizacion() */
    document.getElementById('containerResultadosComercialesId').style.display='none';
    document.getElementById('subModuloresultadosComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloresultadosComerciales').style.borderRight='2px solid #757575';
    
    /* quitar estilos de selección de funcion elaborarCotizacion() */
    document.getElementById('elaborarCotizacionId').style.display='none';
    document.getElementById('subModuloElaborarCotizacion').style.borderTop='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderLeft='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloElaborarCotizacion').style.borderRight='2px solid #757575';
    
    /* quitar estilos a funcion seguimientoCotizaciones() */
    document.getElementById('containerSeguimientoCotizaciones').style.display='none';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderTop='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderLeft='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a Portafolio() (btn submodulo) */
    document.getElementById('containerPortafolioId').style.display='none';
    document.getElementById('crearPortafolioId').style.display='none';
    document.getElementById('subModuloPortafolio').style.borderTop='0px solid';
    document.getElementById('subModuloPortafolio').style.borderLeft='0px solid';
    document.getElementById('subModuloPortafolio').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloPortafolio').style.borderRight='2px solid #757575';
    
    /* Agregar estilos a crearClientes() */
    document.getElementById('containerClientesId').style.display='block';
    document.getElementById('subModuloCrearCliente').style.borderTop='2px solid #757575';
    document.getElementById('subModuloCrearCliente').style.borderLeft='2px solid #757575';
    document.getElementById('subModuloCrearCliente').style.borderBottom='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderRight='0px solid';
    
    /* Quitar estilos a CrearOfertas() */
    document.getElementById('containerCrearOfertasId').style.display='none';
    document.getElementById('subModuloCrearOfertas').style.borderTop='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearOfertas').style.borderRight='2px solid #757575';

    /* Quitar estilos a metasComerciales() */
    document.getElementById('containerMetasComercialesId').style.display='none';
    document.getElementById('subModuloMetasComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloMetasComerciales').style.borderRight='2px solid #757575';
}

function crearOfertas(){
    /* Quitar estilos a funcion elaborarCotizacion() */
    document.getElementById('containerResultadosComercialesId').style.display='none';
    document.getElementById('subModuloresultadosComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloresultadosComerciales').style.borderRight='2px solid #757575';
    
    /* quitar estilos de selección de funcion elaborarCotizacion() */
    document.getElementById('elaborarCotizacionId').style.display='none';
    document.getElementById('subModuloElaborarCotizacion').style.borderTop='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderLeft='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloElaborarCotizacion').style.borderRight='2px solid #757575';
    
    /* quitar estilos a funcion seguimientoCotizaciones() */
    document.getElementById('containerSeguimientoCotizaciones').style.display='none';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderTop='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderLeft='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a Portafolio() (btn submodulo) */
    document.getElementById('containerPortafolioId').style.display='none';
    document.getElementById('crearPortafolioId').style.display='none';
    document.getElementById('subModuloPortafolio').style.borderTop='0px solid';
    document.getElementById('subModuloPortafolio').style.borderLeft='0px solid';
    document.getElementById('subModuloPortafolio').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloPortafolio').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a crearClientes() */
    document.getElementById('containerClientesId').style.display='none';
    document.getElementById('subModuloCrearCliente').style.borderTop='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearCliente').style.borderRight='2px solid #757575';
    
    /* Agregar estilos a crearOfertas() */
    document.getElementById('containerCrearOfertasId').style.display='block';
    document.getElementById('subModuloCrearOfertas').style.borderTop='2px solid #757575';
    document.getElementById('subModuloCrearOfertas').style.borderLeft='2px solid #757575';
    document.getElementById('subModuloCrearOfertas').style.borderBottom='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderRight='0px solid';
    
    /* Quitar estilos a metasComerciales() */
    document.getElementById('containerMetasComercialesId').style.display='none';
    document.getElementById('subModuloMetasComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloMetasComerciales').style.borderRight='2px solid #757575';
    
} 

function metasComerciales(){
    /* Quitar estilos a funcion elaborarCotizacion() */
    document.getElementById('containerResultadosComercialesId').style.display='none';
    document.getElementById('subModuloresultadosComerciales').style.borderTop='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderLeft='0px solid';
    document.getElementById('subModuloresultadosComerciales').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloresultadosComerciales').style.borderRight='2px solid #757575';
    
    /* quitar estilos de selección de funcion elaborarCotizacion() */
    document.getElementById('elaborarCotizacionId').style.display='none';
    document.getElementById('subModuloElaborarCotizacion').style.borderTop='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderLeft='0px solid';
    document.getElementById('subModuloElaborarCotizacion').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloElaborarCotizacion').style.borderRight='2px solid #757575';
    
    
    /* quitar estilos a funcion seguimientoCotizaciones() */
    document.getElementById('containerSeguimientoCotizaciones').style.display='none';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderTop='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderLeft='0px solid';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloSeguimientoCotizaciones').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a Portafolio() (btn submodulo) */
    document.getElementById('containerPortafolioId').style.display='none';
    document.getElementById('crearPortafolioId').style.display='none';
    document.getElementById('subModuloPortafolio').style.borderTop='0px solid';
    document.getElementById('subModuloPortafolio').style.borderLeft='0px solid';
    document.getElementById('subModuloPortafolio').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloPortafolio').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a crearClientes() */
    document.getElementById('containerClientesId').style.display='none';
    document.getElementById('subModuloCrearCliente').style.borderTop='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearCliente').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearCliente').style.borderRight='2px solid #757575';
    
    /* Quitar estilos a crearOfertas() */
    document.getElementById('containerCrearOfertasId').style.display='none';
    document.getElementById('subModuloCrearOfertas').style.borderTop='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderLeft='0px solid';
    document.getElementById('subModuloCrearOfertas').style.borderBottom='2px solid #757575';
    document.getElementById('subModuloCrearOfertas').style.borderRight='2px solid #757575';
    
    /* Agregar estilos a metasComerciales() */
    document.getElementById('containerMetasComercialesId').style.display='block';
    document.getElementById('subModuloMetasComerciales').style.borderTop='2px solid #757575';
    document.getElementById('subModuloMetasComerciales').style.borderLeft='2px solid #757575';
    document.getElementById('subModuloMetasComerciales').style.borderBottom='0px solid';
    document.getElementById('subModuloMetasComerciales').style.borderRight='0px solid';
}


/* Navegacion en el btn portafolio para consultar o crear portafolio */


function crearPortafolio(){
    
    document.getElementById('crearPortafolioId').style.display='flex';
    document.getElementById('consultarPortafolioId').style.display='none';
}

/* Navegacion en el btn portafolio para consultar portafolio */

function consultarPortafolio(){
    document.getElementById('consultarPortafolioId').style.display='flex';
    document.getElementById('crearPortafolioId').style.display='none';
}


/* Navegacion en el btn Clientes para consultar o crear portafolio */


function crearClientes(){
    
    document.getElementById('crearClienteId').style.display='flex';
    document.getElementById('consultarClienteId').style.display='none';
}

/* Navegacion en el btn portafolio para consultar portafolio */

function consultarClientes(){
    document.getElementById('consultarClienteId').style.display='flex';
    document.getElementById('crearClienteId').style.display='none';
}