export const generarEndpoint = ( data: any ) => {

    const { 
        termino, 
        imagenesPorPagina, 
        paginaActual
    } = data;

    const dominio    = 'https://pixabay.com/api/?';
    const apiKey     = '34135912-43b1de0267989ace4b87f4fcb';
    let   parametros = `key=${apiKey}`+
                       `&q=${termino}`+
                       `&lang=es`+
                       `&image_type=photo`;

    if ( imagenesPorPagina && paginaActual ) {

        parametros += `&per_page=${imagenesPorPagina}`+
                      `&page=${paginaActual}`;        
    }                       
        
    return `${dominio}${parametros}`;
}