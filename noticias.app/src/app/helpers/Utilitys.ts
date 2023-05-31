export const CATEGORIAS = [
    { value: 'general',       nombre: 'General' },
    { value: 'business',      nombre: 'Negocio' },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'health',        nombre: 'Salud' },
    { value: 'science',       nombre: 'Ciencia' },
    { value: 'sports',        nombre: 'Deportes' },
    { value: 'technology',    nombre: 'Tecnología' },
];

export const PAISES = [
    { value: 'de', nombre: 'Alemania' },
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'ca', nombre: 'Canadá' },
    { value: 'cn', nombre: 'China' },
    { value: 'co', nombre: 'Colombia' },
    { value: 'cu', nombre: 'Cuba' },
    { value: 'ae', nombre: 'Emiratos Árabes Unidos' },
    { value: 'us', nombre: 'Estados Unidos' },
    { value: 'mx', nombre: 'México' },
    { value: 've', nombre: 'Venezuela' },
];

export const generarEndpoint = (
    categoria: string,
    pais:      string
) => {

    const dominio    = 'https://newsapi.org/v2/top-headlines?';
    const apiKey     = '5724bbe586cb48329323f2e95e424151';
    const parametros = `country=${pais}&`+
                       `category=${categoria}&`+
                       `apiKey=${apiKey}`;
        
    return `${dominio}${parametros}`;
}