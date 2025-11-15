// script.js
document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  // Initial overlay sequence
  tl.to(".overlay.img", {
    y: "-100%",
    duration: 2,
    ease: "power4.inOut"
  })
  .to(".overlay.white", {
    y: "-100%",
    duration: 2,
    ease: "power4.inOut"
  }, "-=0.9")
  .to(".overlay.black", {
    y: "-100%",
    duration: 1.8,
    ease: "power4.inOut"
  }, "-=0.8");

  // Now reveal main text (after overlays)
  tl.fromTo(".reveal-text",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
    "-=0.4" // slight overlap for smoother flow
  );

  // Optional subtle entrance for other UI parts
  tl.from("#arrow", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)"
  }, "-=0.3");
});
