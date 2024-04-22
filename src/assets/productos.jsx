/*
import motobomba from "../../public/imagenes/motobomba.jpg"
import desmalesadora from "../../public/imagenes/desmalesadora.jpg"
import fumigador from "../../public/imagenes/fumigador.jpg" 

const productos =[{
    id: 1,
    imagen: motobomba,
    nombre: "Motobomba",
    precio: 30,
    stock: 9,
    modelo: "Marca Shimaha",
    fuerza: "20hp",
    consumo: "220w"
},

{
    id: 2,
    imagen: desmalesadora,
    nombre: "Desmalesadora",
    precio: 150,
    stock: 20,  
    modelo: "Raptor",
    fuerza: "50hp", 
    consumo: "110w"
},
{
    id: 3,
    imagen: fumigador,
    nombre: "Fumigador",
    precio: 500,
    stock: 30, 
    modelo:"Mar",
    fuerza: "30hp",
    consumo: "15lt",
},
];

export default function Productos(){

   
return productos;

}

/*
export const getProductos = ()=>{
    return(
        productos
    )    
} 



export const getProductoId = (id)=>{
    console.log("envio el producto")
    console.log("me piden el producot con id " +id);
    let pro = null;
    let i = 0;
    while((i < productos.length) && (productos[i].id !== id)){
        i++;
    }
    if(productos[i].id === id){
        pro = productos[i]
    }
    
    let prod = productos.find(prod=>{prod.id === id})
    console.log("este es el prod");
    
    console.log(pro);
    return(
        pro
        
    )    
} 
*/