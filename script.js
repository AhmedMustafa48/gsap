var tl= gsap.timeline();
tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:1.5,
})
tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger:0.3,
});
tl.from("h1",{
    y:20,
    opacity:0,
    scale:0.2,
})

// gsap.to("#box1",{
//     x:1500,
//     duration:1.5,
//     delay:1,
//     rotate:360,
// })
// gsap.to("#box2", {
//   x: 1500,
//   backgroundColor:"yellow",
//   duration: 1.5,
//   delay: 2.5,
//   rotate: 360,
// });

// gsap.to("#box3", {
//   x: 1500,
//   scale:0.5,
//   borderRadius:"50%",
//   duration: 1.5,
//   delay: 4,
//   rotate: 360,
// });
// var tl=gsap.timeline()

// tl.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
// })
// tl.to("#box2", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
// });

