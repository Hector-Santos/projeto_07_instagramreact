export default function Posts(){

    let arrayPosts = [
        {srcTop:"/images/meowed 1.png" , nameTop: "meowed", srcContent: "/images/gato-telefone 1.png" },
        {srcTop:"/images/barked 1.png" , nameTop: "barked", srcContent: "/images/dog1.png"},
        {srcTop:"/images/meowed 1.png" , nameTop: "meowed", srcContent: "/images/gato-telefone 1.png" }
    ]
    return(           
     <div class="posts">
     {arrayPosts.map(post => 
     <div class="post">
        <div class="post-top">
            <img src={post.srcTop} />
            <h1>{post.nameTop}</h1>
            <ion-icon class="dot" name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div class="post-content">
            <img src={post.srcContent} />
        </div>
        <div class="post-bottom">
            <div class="icons">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon class="icon-absolute" name="bookmark-outline"></ion-icon>
            </div>
            <div class="liked">
                <img src="/images/respondeai 1.png" />
                <h1>Curtido por</h1>
                <h2>respondeai</h2>
                <h1>e</h1>
                <h2>outras 123.456 pessoas</h2>
            </div>
        </div>
    </div> ) }
    </div>
    )
}