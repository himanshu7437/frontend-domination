// scroll until something happens

var btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
  document.body.classList.toggle("noscroll"); // add class to <body>

  if(document.body.classList.contains("noscroll")) {
     btn.textContent = "Start Scroll";
  } else {
     btn.textContent = "Stop Scroll";
  }
});

