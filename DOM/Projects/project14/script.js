// show a progress bar which shows how much page has been scrolled.

window.addEventListener("scroll", () => {
  // total height of page minus viewport
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

  // how much scrolled
  const scrolled = window.scrollY;

  // percentage
  const progress = (scrolled/scrollableHeight)*100;

  // update bar
  document.querySelector(".bar").style.width = progress + "%";
});
