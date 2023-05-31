export const capitalizeWord = ( texto: string ) => {

    const array = texto.split(" ");

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() +
                   array[i].slice(1).toLowerCase();
    }

    return array.join(" ");
}