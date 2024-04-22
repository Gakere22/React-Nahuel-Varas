import motobomba from "../public/imagenes/motobomba.jpg"
import desmalesadora from "../public/imagenes/desmalesadora.jpg"
import fumigador from "../public/imagenes/fumigador.jpg" 

const productos =[{
    id: 1,
    cat: "Repuestos",
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
    cat: "Maquinas",
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
    cat: "Maquinas",
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


export const getProductos = ()=>{
    return new Promise((resolve)=>{
        const prod = productos;  
        setTimeout(()=>{
            resolve(prod)
        },1000);
    });
};
        
       
export const getProductosByCategoria = (categoria)=>{
    return new Promise((resolve)=>{
        const prod = productos.filter((pro)=>(pro.cat === categoria))  
        setTimeout(()=>{
            resolve(prod)
        },1000);
    });
};


export const getProductoId = (id)=>{
    return new Promise((resolve)=>{
        const producto = productos.find((pro)=>(pro.id === id));
        setTimeout(()=>{
            resolve(producto);
        },2000);
    });    
};