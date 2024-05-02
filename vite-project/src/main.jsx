// Librairie qui permet de générer les statsq de notre
import React from "react";
// Rendre l'application dans le html et de mettre à jour les bons élements
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {Titre} from "./components/ui/Titre.jsx"

// Création d'objet pratique avec deux clé: exo et heure
const pratique = {
  exo: "React",
  heure: 22,
};
// Déclaration d'une fonction qui prend en parametre un objet avec 1 clé: label
function Main(propo) {
  // Déclaration de variable de type object avc 2 clés: backgroundColor et Color
  const monStyle = { backgroundColor: "royalblue", color: "white" };
  // Retourne du jsx qui sera rendu en bouton et on a assugné le style: monStyle
  return <button style={monStyle}>{propo.label}</button>;
}

// Un composant React est une fonction qui retourne du JSX
// Déclaration d'une fonction qui prends en paramétre rien et qui retourne du JSX
function ContactForm() {
  return (
    <form>
      <input placeholder="Exercice" />
      <input placeholder="heure" />
      {Main({ label: "Valider" })}
    </form>
  );
}
// Point d'entrée de l'application
// On utilise la librairie ReactDom pour mettre notre application dans la page HTML
ReactDOM.createRoot(document.getElementById("root")).render(<App></App>
  
);
// Exercice:
// Créer un composant Titre qui reçoit un parametre de type objet avec la clé text.
// Dans le composant affiché un h1 en utilisant l'objet reçue en props pour le text du titre
// Utiliser la composant dans le render pour l'afficher
// Ajouter Du style au titre pour changer sa couleur et sa taille
// Utiliser le composant dans le render pour l'afficher
// Modifier le composant pour utiliser children

// function TitreE(obj) {
//   const myStyle = { fontSize: "90px", color: "orange" };
//   return <h1 style={myStyle}>{obj.children}</h1>;
// }
// console.log(obj);

// Créer un composant : Btn: qui reçoit en paramétre 2 clé:
// -text: string
// -type: "primary":blue, "secondary": blanc, "danger": rouge

// Utiliser des conditions/op ternaire/switch case. pour determiner la couleur du bouton
// return button avec le text la couleur.

// Afficher deux bouton dans l'applicaion un rouge et un bleu

function Btn(obj) {
  let couleur = "";
  switch (obj.type) {
    case "primary":
      couleur = "blue";
      break;
    case "secondary":
      couleur = "white";
      break;
    case "danger":
      couleur = "red";
      break;
  }
  return <button style={{ color: couleur }}>{obj.text}</button>;
}
// Exercice:
// Créer un composant Card qui recoit juste des children
// Le composant va afficher les enfant dans un div avec:
// Une bordure, centrer les élément, de l'ombre, et un padding
function Card(children) {
  return (
    <div
      style={{
        border: "1px solid black",
        alignItems: "center",
        padding: "10px",
        boxShadow: "5px 5px 5px black",
      }}
    >{children.children}</div>
  );
}
