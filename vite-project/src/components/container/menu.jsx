//Exerice:
// Créer un composant Menu:
    // Recevoir en props children(Element a cacher), titre: tire a afficher.
    // Afficher le titre dans un h3
    // Créer une var d'état initialiser a false
    // Utiliser un op ternaire pour afficher ou cacher les children suivant l'etat de variable

import { useState } from "react"

    // Ajouter un bouton, quand on clique dessus, il va inverser la variable d'état.
export function Menu(props){
    //Ici j'ai créer une fonction Menu qui va prendre en parametre un props, ici props c'est un objet (une fonction ne peut prendre que un paramétre et non deux ou 3)

    const[nomTitre,setnomTitre]=useState(false)
    //J'ai créer une variable d'état qui va prendre comme paramétre un booléan en l'occurence (false) dans ce cas, comme c'est un tableau j'ouvre les [] et j'annonce ma variable et ma fonction lié à la variable, je l'a déstructure
function Change(){
    if(nomTitre==false){
        setnomTitre(true)
    }else{
        setnomTitre(false)
    }
    console.log(nomTitre)
    
}
    return(
        <div>
            <h3>{props.titre}</h3>
            {/* Ici j'ai mis ma condition sous forme d'un op ternaire */}
            {nomTitre ? props.children: null}
            <button onClick={()=> Change()}>Clique pour voir</button>
            </div>
    )
}