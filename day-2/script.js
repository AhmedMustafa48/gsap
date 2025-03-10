// gsap.from("#page1 #box",{
//   scale:0,
//   delay:1,
//   duration:2,
//   rotation:360,
// })
// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 2,
//   rotation: 360,
//   scrollTrigger:{
//     trigger:"#page2 #box",
//     scroller:"body",
//     markers:true,
//     start:"top 60%"
//   }
// });
//  ================================================another

// gsap.from("#page2 h1",{
//   opacity:0,
//   duration:2,
//   x:500,
//   scrollTrigger:{
//     trigger:"#page2 h1",
//     scroller:"body",
//     markers:true,
//     start:"top 50%"
//   }
// }) 
// gsap.from("#page2 h2", {
//   opacity: 0,
//   duration: 2,
//   x: -500,
//   scrollTrigger: {
//     trigger: "#page2 h2",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// }); 

// ======================================================another

// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:720,
//     scrollTrigger:{
//       trigger:"#page2 #box",
//       scroller:"body",
//       markers:true,
//       start:"top 50%",
//       end:"top 30%",
//       scrub:3,
//       pin:true,
//     }
// })

// =====================================================another

gsap.to("#page2 h1",{
  transform:"translateX(-167%)",
  duration:3,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
    pin:true,
    scrub:2,
  }
})
// =================== Day 2 ended