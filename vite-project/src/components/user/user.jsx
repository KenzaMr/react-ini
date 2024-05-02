//Exercice:
// Créer un composant User.
// Le composant comprendra 3 autres composants :
// Avatar : un composant qui affiche une image circulaire.
// FullName: un composant contenant lui aussi deux composants :
// FirstName: affiche un prénom.
// LastName: affiche un nom.
// Hobbies : un composant contenant une liste de passions/compétences.
// Contact : Un composant qui affiche l’email et le téléphone  accompagné d'icônes.
import Avatar from "./avatar";
import Contact from "./contact";
import FullName from "./full-name";
import Hobbies from "./hobbies";

export default function User() {
  const userFormDB = {
    avatar: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fullname: {
      firstName: "Knz",
      lastName: "Mroudjae",
    },
    hobbies: [
      {
        id: "1",
        titre: "HTML",
        exp: 75,
      },
      {
        id: "2",
        titre: "CSS",
        exp: 90,
      },
      {
        id: "3",
        titre: "Javascriot",
        exp: 80,
      },
      {
        id: "4",
        titre: "React",
        exp: 55,
      },
    ],
    contact: {
      email: "kenza.mroudjae@gmail.com",
      tel: "06 25 75 29 10",
    },
  };
  return (
    <div>
      <Avatar lien={userFormDB.avatar}></Avatar>
      <FullName
        prenom={userFormDB.fullname.firstName}
        nom={userFormDB.fullname.lastName}
      ></FullName>
      <Hobbies loisirs={userFormDB.hobbies}></Hobbies>
      <Contact
        mail={userFormDB.contact.email}
        phone={userFormDB.contact.tel}
      ></Contact>
    </div>
  );
}
