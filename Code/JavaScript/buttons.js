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