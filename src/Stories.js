
export default function Stories(){

   let arraystories =[
   {src:"images/9gag 1.png", title:"9 Gag"},
   {src:"/images/meowed 1.png", title:"meowed"},
   {src:"/images/nathanwpylestrangeplanet 1.png", title:"nathanwpy"},
   {src:"images/wawawiwacomicsa 1.png", title:"wawawiw..."},
   {src:"/images/barked 1.png", title:"barked"},
   {src:"/images/respondeai 1.png", title:"respondeai"},
   {src:"/images/filomoderna 1.png", title:"filomode"},
   {src:"/images/memeriagourmet 1.png", title:"memeriag..."},
   {src:"/images/9gag 1.png", title:"9 Gag"},

    ]
    
    return (<div class="stories">
    {arraystories.map(story => 
    <div class="story">
    <img class="stories-bkg" src="/images/stories_background 1.png" />
    <img class="stories-logo" src={story.src} />
    <h1>{story.title}</h1>
     </div>)}
</div>)

}