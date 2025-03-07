let video_catiner = document.getElementById("video-catiner");
let playbtn = document.getElementById("play");

video_catiner.addEventListener("mouseenter", ()=>{
    gsap.to(playbtn, {
        opacity : 1 ,
        scale : 1, 
    })
})
video_catiner.addEventListener("mouseleave", ()=>{
    gsap.to(playbtn, {
        opacity : 0 ,
        scale : 0, 
    })
})

video_catiner.addEventListener("mousemove", (event)=>{
    gsap.to(playbtn, {
        left: event.x- 70,
        top : event.y -80, 
    })
})