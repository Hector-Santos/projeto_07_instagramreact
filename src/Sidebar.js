

function UserProfile(props){
return(<div class="profile-main">
<img src={props.imgsrc} />
<div class="profile-text">
    <h1>{props.h1}</h1>
    <h2>{props.h2}</h2>
</div>
</div>)
}


export default function Sidebar(){

    let arraySidebar = [
        {src:"/images/profilepic-2.png", h1:"bad.vibes.memes" },
        {src: "/images/profilepic-3.png", h1:"chibirdart" },
        {src: "/images/profilepic-4.png", h1:"razoesparaacreditar" },
        {src: "/images/profilepic-5.png", h1:"adorable_animals" },
        {src: "/images/profilepic-6.png", h1:"smallcutecats" },
    ]
    return(        
    <div class="sidebar">
    < UserProfile imgsrc = "/images/profilepic-1.png" h1 = "catanacomics" h2 = "Catana"/>
    <div class="links-sidebar">
        <h1>Sugestões para você</h1>
        <h2>Ver tudo</h2>
    </div>
        {arraySidebar.map(contato =>
        <div class="contato">
            <img src={contato.src} />
            <div class="contact-text">
                <h1>{contato.h1}</h1>
                <h2>Segue você</h2>
                <h3>Seguir</h3>
            </div>
            </div> )}
    </div>)
}