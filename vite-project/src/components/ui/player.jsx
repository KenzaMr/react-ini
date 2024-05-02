import classes from "./header.module.css"
export function Player(){
    const score= 899
    if(score>500){
       return <p style={{color:"green"}}>Vainqueur {score}</p>
    }else{
       return <p style={{color:"red"}}>Perdant {score}</p>
    }
    // const style = score > 500 ? 'green' : 'red'
    // const paragraphe = score > 500 ? 'Vainqueur' : 'Perdant'

    // return ( <p style={{color:style}}>{paragraphe} {score}points</p> )
}

export function Header(){
    return(
        <div className={classes.header}>
            <h1>Composants</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illo nesciunt, quos natus consequuntur nihil tempora aperiam laborum obcaecati veritatis, iste quisquam facilis, perspiciatis deserunt quas sapiente cumque. Eligendi, sed.</p>
            <img className={classes.img}src="https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_1280.jpg" alt="" />
            <button>Bonjour</button> 
        </div>
    )
}