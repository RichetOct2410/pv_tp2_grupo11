export function Longitud(texto) 
{
    if (texto.length > 20) 
    {
            return {fondo: "blue", color: "white"};
    } 
    else 
    {
            return {fondo: "white", color: "black"};
    }
}