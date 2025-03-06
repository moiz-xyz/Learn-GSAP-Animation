let main = document.getElementById("main");
main.innerHTML = `
<div id="cursor">

        </div>
`
let cursor  = document.getElementById("cursor");

main.addEventListener("mousemove" , (events) =>{
   gsap.to(cursor, {
    x : events.x,
    y : events.y,
    ease : "bounce" 
   })
   gsap.to(cursor, {
    x : events.x,
    y : events.y,
    ease : "rough" 
   }) 
   gsap.to(cursor, {
    x : events.x,
    y : events.y,
    ease : "circ" 
   })
})