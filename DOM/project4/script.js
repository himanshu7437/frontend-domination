var crsr = document.querySelector(".crsr");
var maindiv = document.querySelector(".main");
var logo = document.querySelector(".logo");
var hero = document.querySelector("h1");

function customcrsr() {
  maindiv.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
  });
}

function heromouse() {
  hero.addEventListener("mouseenter", function () {
    crsr.style.scale = 5;
  });
  hero.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
  });
}

// function logomouse() {
//   logo.addEventListener("mouseenter", function () {
//     crsr.style.scale = 6;
//   });
//   logo.addEventListener("mouseleave", function () {
//     crsr.style.scale = 1;
//   });
// }


// 🧲 Magnetic effect + scale when hovering on logo
function logomouse() {
  // Add mousemove on logo for magnetic pull
  logo.addEventListener("mousemove", function (e) {
    const rect = logo.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Apply magnet-like offset + scaling
    logo.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.1)`;

    // Also grow the cursor
    crsr.style.scale = 6;
  });

  // Reset everything on mouse leave
  logo.addEventListener("mouseleave", function () {
    logo.style.transform = `translate(0px, 0px) scale(1)`;
    crsr.style.scale = 1;
  });
}

heromouse();
logomouse();
customcrsr();
