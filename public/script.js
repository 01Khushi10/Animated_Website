init();
function init(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

};

var crsr = document.querySelector(".cursor");
var wrapper = document.querySelector(".wrapper");
document.addEventListener("mousemove",function(details){
    crsr.style.left = details.x +20+ "px";
    crsr.style.top = details.y +20+ "px";
})


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".wrapper",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1 video", {
    width: "90%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".wrapper",
        // markers:true,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})

tl2.to(".page2",{
    backgroundColor:"#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".wrapper",
        // markers:true,
        start: "top -280%",
        end: "top -300",
        scrub: 3
    }
})
tl3.to(".wrapper",{
    backgroundColor:"#0F0D0D "
})


var boxes = document.querySelectorAll(".box");
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var attr = elem.getAttribute("data-img");
        crsr.style.width = "400px"
        crsr.style.height = "350px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${attr})`
    })
    elem.addEventListener("mouseleave",function(){
        var attr = elem.getAttribute("data-img");
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "100px"
        crsr.style.backgroundImage = `none`
    })
})
var purple = document.querySelector(".purple");
var nav = document.querySelectorAll("nav .nav-elems h4");
// nav.forEach(function(h4){
//     h4.addEventListener("mouseenter", function(){
//         purple.style.opacity = "1"
//         purple.style.display = "block"
//     })
//     h4.addEventListener("mouseleave", function(){
//         purple.style.opacity = "0"
//         purple.style.display = "none"

//     })
// })
var first_h4 = document.querySelector("[second]");
var second_h4 = document.querySelector("[third]");
var third_h4 = document.querySelector("[fourth]");
var work = document.querySelector(".work");
var studio = document.querySelector(".studio");
var contact = document.querySelector(".contact");


first_h4.addEventListener("mouseover", function(){
    work.style.display = "flex";
    work.style.opacity = "1"
    purple.style.opacity = "1"
    purple.style.display = "block"
})
first_h4.addEventListener("mouseout", function(){
    work.style.opacity = "0"
    work.style.display = "none"
    purple.style.opacity = "0"
    purple.style.display = "none"
    
})
second_h4.addEventListener("mouseover", function(){
    studio.style.display = "flex";
    studio.style.opacity = "1"
    purple.style.opacity = "1"
    purple.style.display = "block"
})
second_h4.addEventListener("mouseout", function(){
    studio.style.opacity = "0"
    studio.style.display = "none"
    purple.style.opacity = "0"
    purple.style.display = "none"
    
})
third_h4.addEventListener("mouseover", function(){
    contact.style.display = "flex";
    contact.style.opacity = "1"
    purple.style.opacity = "1"
    purple.style.display = "block"
})
third_h4.addEventListener("mouseout", function(){
    contact.style.opacity = "0"
    contact.style.display = "none"
    purple.style.opacity = "0"
    purple.style.display = "none"
    
})


