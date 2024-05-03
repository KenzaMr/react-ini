import { useState } from "react";

export function Compteur(){
    // Variables d'état : La variable (compteur) et la fonction (setCompteur) pour mettre à jour la variable 
    const [compteur, setCompteur]= useState(0)
    function decremente(){
        setCompteur(compteur-1);
    }
    function acremente(){
        setCompteur(compteur+1);
    }
    return(
        <div>
            <h2>{compteur}</h2>
            <button onClick={() => decremente()}>-1</button>
            <button onClick={() => acremente ()}>+1</button>
        </div>
    )
}