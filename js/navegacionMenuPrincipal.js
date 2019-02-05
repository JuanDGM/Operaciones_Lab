

function menuComercial(){
    
    document.getElementById('marcoTitleArticleId').innerHTML = '';
    document.getElementById('marcoTitleArticleId').innerHTML = 'COMERCIAL';
    
    document.getElementById('menuComercial').style.display = 'block';
    document.getElementById('menuRecoleccion').style.display = 'none';
    document.getElementById('menuMatricula').style.display = 'none';
    document.getElementById('menuAsignacionTrabajo').style.display = 'none';
    document.getElementById('menuRegistrarAnalisis').style.display = 'none';
}

function menuRecoleccion(){
    
    document.getElementById('marcoTitleArticleId').innerHTML = '';
    document.getElementById('marcoTitleArticleId').innerHTML = 'RECOLECCIÓN DE MUESTRAS';
    
    document.getElementById('menuComercial').style.display = 'none';
    document.getElementById('menuRecoleccion').style.display = 'block';
    document.getElementById('menuMatricula').style.display = 'none';
    document.getElementById('menuAsignacionTrabajo').style.display = 'none';
    document.getElementById('menuRegistrarAnalisis').style.display = 'none';
}

function menuMatricula(){
    
    document.getElementById('marcoTitleArticleId').innerHTML = '';
    document.getElementById('marcoTitleArticleId').innerHTML = 'MATRICULA DE MUESTRAS';
    
    document.getElementById('menuComercial').style.display = 'none';
    document.getElementById('menuRecoleccion').style.display = 'none';
    document.getElementById('menuMatricula').style.display = 'block';
    document.getElementById('menuAsignacionTrabajo').style.display = 'none';
    document.getElementById('menuRegistrarAnalisis').style.display = 'none';
}

function menuAsignacionTrabajo(){
    
    document.getElementById('marcoTitleArticleId').innerHTML = '';
    document.getElementById('marcoTitleArticleId').innerHTML = 'ASIGNACIÓN DE TRABAJO';
    
    document.getElementById('menuComercial').style.display = 'none';
    document.getElementById('menuRecoleccion').style.display = 'none';
    document.getElementById('menuMatricula').style.display = 'none';
    document.getElementById('menuAsignacionTrabajo').style.display = 'block';
    document.getElementById('menuRegistrarAnalisis').style.display = 'none';
}

function menuAsignacionTrabajo(){
    
    document.getElementById('marcoTitleArticleId').innerHTML = '';
    document.getElementById('marcoTitleArticleId').innerHTML = 'REGISTRAR ANALISIS';
    
    document.getElementById('menuComercial').style.display = 'none';
    document.getElementById('menuRecoleccion').style.display = 'none';
    document.getElementById('menuMatricula').style.display = 'none';
    document.getElementById('menuAsignacionTrabajo').style.display = 'none';
    document.getElementById('menuRegistrarAnalisis').style.display = 'block';
}


