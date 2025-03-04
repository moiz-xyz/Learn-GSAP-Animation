gsap.to("#box1", {
    //  Moves the box to x-axis
    x: 100,
    // tells the duration of movemoent of box
    duration : 2 , 
    // it delays the movemnet of box
    delay :2
})
gsap.to("#box2", {
    x : 120,
    y : 500,
    duration : 3,
    delay : 1
})

// To starts from intial and ends at final
gsap.to("#box1", {
    x: 1000,
    duration : 3 , 
    delay : 1
})
// from starts from final and ends at initial
gsap.from("#box2", {
    x : 1000,
    duration : 3,
    delay : 1
})

gsap.to("#box1", {
    x: 1000,
    duration : 3 , 
    delay : 1 , 
    // it rotates the box to desired degree
    rotate : 360 , 
    // Changes the backgound color while moving
    backgroundColor : "yellow", 
    // Changes the border radius while moving
    borderRadius : "50%" ,
})
gsap.to("#box2", {
    x: 1000,
    duration : 3 , 
    delay : 1 , 
    rotate : 360 , 
    backgroundColor : "blue" ,
    borderRadius : "50%" ,
    // changes the size of box
    scale :0.5

})