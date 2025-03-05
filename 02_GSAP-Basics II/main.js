gsap.from("h1" , {
    opacity : 0,
    color : "yellow",
    duration : 2, 
    delay : 1 , 
    y : 50
})
gsap.from("h1" , {
    opacity : 0,
    color : "yellow",
    duration : 1, 
    delay : 1 , 
    y : 30, 
    stagger : 0.5
})

gsap.to("#repat-box", {
    x : 1000,
    duration : 3,
    dealay:1,
    rotate : 360,
    // It reapeated the box 2 time 1 time by default and second time due to 1
    // repeat : 1
    //  For infinite repeat
     repeat :-1  
})
gsap.to("#repat-box", {
    x : 1000,
    duration : 3,
    dealay:1,
    rotate : 360,
    repeat : -1,
// it completes x and then yoyo return it back from y
    yoyo : true
})

gsap.to("#timeline1",{
    x : 1000,
    duration : 3,
    delay: 1,
    rotate : 360,
})
gsap.to("#timeline2",{
    x : 1000,
    duration : 3,
    // WHy 4 because  #timeline1 takes 3 duration and 1 delay 3+1 = 4
    delay: 4,
    backgroundColor : "white"
})
gsap.to("#timeline3",{
    x : 1000,
    duration : 3,
    // WHy 7 because  #timeline1 takes 3 duration and 1 delay 3+1 = 4
    delay: 7,
    borderRadius : "50%"
})

//  But it's so dfficult to calculate delay so we use time line 
let tl = gsap.timeline()

// timeline ensures that #timeline1 starts first then #timeline2 & then #timeline3 no need for delay
tl.to("#timeline1",{
    x : 1000,
    duration : 3,
    delay: 1,
    rotate : 360,
})
tl.to("#timeline2",{
    x : 1000,
    duration : 3,
    backgroundColor : "white"
})
tl.to("#timeline3",{
    x : 1000,
    duration : 3,
    borderRadius : "50%"
})
