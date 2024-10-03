"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import diceImage from 'https://images.freeimages.com/vhq/images/previews/c63/twenty-sided-dice-138435.png'
import { index } from "drizzle-orm/mysql-core";

// nos devuelve array el valor y un elemento que nos pemite setear el elemento (usestate)

const diceValue = () => {
    return Math.floor(Math.random()*20) + 1;
};

const MagicDice = () => {
    const [results,setResults] = useState<number[]>([]);
    const[isSpin,setIsSpin] = useState<boolean>(false);
    const[actualResult,setActualResult] = useState<number | null>(null);

    const rollDice = () => {
        setIsSpin(true); //inicio la animacion de giro seteando el booleano
        setTimeout(() => {
            const result = diceValue();
            setActualResult(result); //guardo el nuevo resultado
            setResults((prevResults) => [...prevResults,result]); //añado el nuevo resultado a la lista de resultados que tengo
            setIsSpin(false);
         }, 1000); //espera 1 segundo antes de dar el resultado (como esta formado timeout)
    
    };

    return(
        <div className="text center mt-10">
            <h1 className="text-2x1 font-bold">MAGIC DICE</h1>

            <div>
                {isSpin ? (
                     <img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt="Girando dado" className="mx-auto w-20 h-20" />
                ) : (
                    <img src='https://images.freeimages.com/vhq/images/previews/c63/twenty-sided-dice-138435.png' alt="Dado" className="mx-auto w-20 h-20" />
                )}
            </div>
            
            <Button onClick={rollDice} disabled={isSpin}>
                {isSpin ? "Girando...": "Tirar Dado"}
            </Button>


            {/* Mostrar el resultado actual */}
            {actualResult !== null && (
                <div className="mt-4 text-x1">
                    {actualResult}
                </div>
            )}

            {/* Mostrar el historial de tiradas */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Historial de Resultados:</h2>
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>Tirada {index + 1}: {result}</li>
                ))}
                </ul>
            </div>
        </div>
    )
};

export default MagicDice;
