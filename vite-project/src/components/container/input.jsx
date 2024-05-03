// Créer AfficheNom
// Input pour entrer un valeur
// Utiliser une variable pour stocker les entrées de l'utilisateur

import { useState } from "react"

// Afficher la variable dans un titre
export function AfficheNom(){
const[stock,setStock]=useState("");
function titre(e){
    const texteEntre=e.target.value
    setStock(texteEntre)
}
    return(
        <div>
            <input onChange={(e) => titre(e)}type="text" />
            <h1>{stock}</h1>
        </div>
    )
}