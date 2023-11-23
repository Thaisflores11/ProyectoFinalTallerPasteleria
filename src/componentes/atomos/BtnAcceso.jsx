const textboton =[
    {
    id: 1,
    nombre: "acceso",
    },
    {
    id: 2,
    nombre: "Registrarse",
    },

];
export function BtnAcceso(){
    return textboton.map((item,index)=> {
        return(
            <button className="btnlog" key={index}>{item.nombre}</button>
        );
    })
}