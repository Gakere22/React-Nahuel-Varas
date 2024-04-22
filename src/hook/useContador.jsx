import { useState } from "react";

export  const useContador = (inicio = 0, min  , max)=>{

    if (inicio < min || inicio > max) inicio = min;

    const [valor, setValor]= useState(inicio)


    const incrementar = ()=>{
        if (valor < max){
            setValor(valor + 1);
            console.log("se aumento el contador");
        }
    }

    const decrementar = ()=>{

        if(valor > min){
            setValor(valor - 1 );
            console.log("se reduce el contador");
        }
    }

    const reiniciar = ()=>{
        setValor(inicio);
    }


    return {valor, incrementar, decrementar, reiniciar}
}