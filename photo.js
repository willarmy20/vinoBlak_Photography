const timeline = gsap.timeline()


//use the timeline.to() method, allows us to animate from the current state to whatever state we specify in there
timeline.to(".image-wrap", {
    height: "550px",
    backgroundSize:"100%",
    duration: 1.5,
    ease: "power4.inOut",
})
.to( ".image-wrap", {
        height: "250px",
        backgroundPosition: "50% 15%",
        duration:1.3,
        y: "0",
        ease: "power3.inOut"
    }, 
    1.5
)
.from(".big-name", {
    y: getYDistance(".big-name"),
    duration: 1.3,
    ease: "power3.inOut"
    },
    1.5
)
.from(".hide",{
    opacity:"0", 
    duration: 1.3, 
    ease: "power3.inOut"
})



function getYDistance(el){
    return(
        window.innerHeight - document.querySelector(el).getBoundingClientRect().top
    );
}