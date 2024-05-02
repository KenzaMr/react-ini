// Exercice
// Créer un composant Routine qui affiche 3 boutons :
// "Manger", "Dormir", "Étudier".
// Ajouter un ‘onClick’ à chaque bouton de sorte que, lorsqu'il est cliqué, l'utilisateur soit averti par un message (utilisez la fonction alert
export function Routine(){
    function Alert(props){
        alert("va"+props)
    }
    return (
        <div>
            <button onClick={()=>{
                Alert(" manger")
            }}>Manger</button>
            <button onClick={()=>{
                Alert(" dormir")
            }}> Dormir</button>
            <button onClick={()=>{
                Alert(" etudier ")
            }} >Etudier</button>
        </div>
    )
}