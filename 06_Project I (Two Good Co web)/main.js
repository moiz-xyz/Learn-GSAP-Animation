    let locomotiveScroll = () =>{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveScroll() ;
let navbarAnimatoin = ()=>{
    gsap.to("#nav-1 svg", {
        transform : "translateY(-100%)",
        scrollTrigger : {
         trigger: "#page1",
            scroller : "#main",
            start : "top 0",
            end : "top -5%",
            scrub : true,
        }
    })
    gsap.to("#nav-2 #links", {
        transform : "translateY(-100%)",
        opacity : 0,
        scrollTrigger : {
         trigger: "#page1",
            scroller : "#main",
            start : "top 0",
            end : "top -5%",
            scrub : true,
        }
    })
}
navbarAnimatoin()

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
            start: "top 70%",  
            toggleActions: "play none none none",
            scroller: "#main"  
        }
    });

    gsap.from("#support p", {
        y: 500, 
        opacity: 0, 
        duration: 3, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#support", // Correct trigger
            start: "top 90%",  // Adjusted for better visibility
            toggleActions: "play none none none",
            scroller: "#main",
        }
    });
    
    gsap.from("#support h6", {
        y: 500, 
        opacity: 0, 
        duration: 3, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#support", 
            start: "top 90%",  
            toggleActions: "play none none none",
            scroller: "#main",
        }
    });
    
    gsap.from("#page2 hr", {
        y: -500, 
        opacity: 0, 
        duration: 2, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#page2 hr",
            start: "top 80%",  
            toggleActions: "play none none none",
            scroller: "#main"  
        }
    });

 
}
page2_h3Animation();

let productAnimaton = () => {
    let product_Page = document.getElementById("page5");
    let circle = document.getElementById("circle")

    product_Page.addEventListener("mouseenter", ()=>{
        gsap.to(circle, {
            opacity : 1 ,
            scale : 1, 
        })
    })
    product_Page.addEventListener("mouseleave", ()=>{
        gsap.to(circle, {
            opacity : 0 ,
            scale : 0, 
        })
    })
    
    product_Page.addEventListener("mousemove", (event)=>{
        gsap.to(circle, {
            left: event.x- 70,
            top : event.y -80, 
        })
    })

}
productAnimaton()