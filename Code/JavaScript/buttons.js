// Variables //
let age = 25;
const name = "Alice";

// Functions //
function greet(name) 
{
    alert("Hello from External JS! " + name);
}

const observer = new IntersectionObserver
(entries => 
    {
    entries.forEach(entry => 
    {
        if (entry.isIntersecting) 
        {
        entry.target.classList.add('active');
        } 
        else 
        {
        entry.target.classList.remove('active');
        }
    });
    });

document.querySelectorAll('.animate-on-scroll').forEach(el => 
{
    observer.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  const transitionEl = document.getElementById("page-transition");

  // Show entrance animation
  transitionEl.classList.add("show");
  setTimeout(() => {
    transitionEl.classList.remove("show");
  }, 800);

  // Handle transitions for buttons and links
  document.querySelectorAll("button[data-href], a[href]").forEach(el => {
    el.addEventListener("click", e => {
      const href = el.dataset.href || el.getAttribute("href");

      if (href && !href.startsWith("http") && !href.startsWith("mailto")) {
        e.preventDefault();
        transitionEl.classList.add("hide");
        setTimeout(() => {
          window.location.href = href;
        }, 800);
      }
    });
  });
});
