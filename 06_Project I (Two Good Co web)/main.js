gsap.registerPlugin(ScrollTrigger);
let videoAnimation = ()=>{
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
}
videoAnimation()

let loadingFunction = ()=>{
    gsap.from("#page1 h1", {
        y : 100,
        duration : 0.5 ,
        delay : 0.3 ,
        opacity : 0, 
        stagger : 0.5
    })
    gsap.from("#video-catiner", {
        scale : 0.9,
        duration : 0.9 ,
        delay : 1.5 ,
        opacity : 0, 
    })
}
loadingFunction()

let page2_h3Animation = () => {
    gsap.from("#head h3", {
        y: 500, 
        opacity: 0, 
        duration: 2, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#head",
            start: "top 40%",  // Start animation when top of #head is 80% in viewport
            toggleActions: "play none none none", 
        }
    });
    gsap.from("#support p", {
        y: 500, 
        opacity: 0, 
        duration: 3, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#head",
            start: "top 40%",  // Start animation when top of #head is 80% in viewport
            toggleActions: "play none none none", 
        }
    });
    gsap.from("#support h6", {
        y: 500, 
        opacity: 0, 
        duration: 3, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#head",
            start: "top 40%",  // Start animation when top of #head is 80% in viewport
            toggleActions: "play none none none", 
        }
    });
    gsap.from("#page2 hr", {
        y: -500, 
        opacity: 0, 
        duration: 2, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#head ",
            start: "top 80%",  // Start animation when top of #head is 80% in viewport
            toggleActions: "play none none none", 
        }
    });
}
page2_h3Animation()
