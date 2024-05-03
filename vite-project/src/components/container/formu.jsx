// Exercice:
// Créer un composant (SigninForm) formulaire qui demande : username, email et password.
// Utiliser les variables d’état pour stocker les entrées de l’utilisateur.

import { useState } from "react";

// Ajouter un bouton qui affiche le ‘username’ et ‘email’ dans une boîte d’alerte
//Je déclare ma fonction
export function SigninForm(){
    //Je déclare ma variable d'état
    const[username,setusername]=useState('')
    const[mail,setmail]=useState('')
    const[password,setpassword]=useState('')
    //Je crée ma fonction qui éxécute pour que chaque frappe 
    function Login(e){
        const textName=e.target.value;
        setusername(textName)
    }
    function Mail(e){
        setmail(e.target.value)
    }
    function PassWord(e){
        setpassword(e.target.value)
    }
    //Je déclare une fonction pour mon message d'alerte
    function Message(props){
        alert(props)
    }
    return(
        <div>
            <input type="text" onChange={(e)=>Login(e)} placeholder="Username"/>
            <input type="text" onChange={(e)=> Mail(e)} placeholder="Mail"/>
            <input type="password" placeholder="mdp" onChange={(e)=> PassWord(e)}/>
            <button onClick={()=>Message(username +' '+mail+' '+password)}>Afficher</button>
        </div>
    )
}