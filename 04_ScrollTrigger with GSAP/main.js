gsap.to("#page1 #box1",{
scale : 0,
duration : 3,
delay : 1 ,
rotate : 720,
repeat : -1
})
gsap.to("#page2 #box1",{
    scale : 0,
    duration : 3,
    delay : 1 ,
    rotate : 720,
    // repeat : -1
    scrollTrigger : "#page2 #box1"
    })
gsap.to("#page3 #box1",{
        scale : 0,
        duration : 3,
        delay : 1 ,
        rotate : 720,
        // repeat : -1
         scrollTrigger : "#page2 #box1"
        })
//  scrollTrigger : "#page2 #box1" animation when the user comes at that particular stage 