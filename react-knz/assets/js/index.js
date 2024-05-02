console.log("cc")
const icon=document.getElementById("btn-id")
const nav=document.getElementById("nav-bar")
icon.addEventListener("click",function(){
    console.log("wsh")
    nav.classList.toggle("active")
    console.log(nav)
})
// Exercice
// Ajouter un champ, un bouton et une div pour les tâches
// Dans le javascript 
// Selectionner le bouton et un ajouter un evenement 
const btn=document.querySelector(".btn-block")
const champs= document.querySelector("#tache")
const zone=document.querySelector('.division')
const para=document.createElement('p')
para.classList.add("paragraphe")
console.log(champs)
btn.addEventListener("click", function(){
    
    if(champs.value == ""){
        para.textContent="Le champs est  obligatoire"
        zone.append(para)
    }
   else{
    if(para){
        para.remove()
    }
    const section= document.createElement('div')
    // console.log(section)
    section.classList.add('imaginaire')
    const tache= document.createElement('p')
    tache.textContent=champs.value
    // console.log(tache);
    const tacho= document.createElement('p')
    tacho.textContent="29/04"
    const valid= document.createElement('button')
    valid.classList.add('submit')
    valid.textContent="Valider"
    valid.addEventListener("click",function(){
        section.style.backgroundColor="blue"
        supp.remove()
    })
    // console.log(valid)
    const supp= document.createElement('button')
    supp.classList.add("delete")
    supp.textContent="Supprimer"
    supp.addEventListener("click", function(){
        section.remove()
    })
    // console.log(supp)
    section.append(tache,tacho,valid,supp)
    zone.append(section)
   }
})

// Selectionner le champs 
// Si le champ est vide ajouter une erreur dans la HTML

        //Si le champ n'est pas vide
            // Créer la tache (titre, date bouton valider et bouton supprimer)
            // Ajouter la tache dans le html