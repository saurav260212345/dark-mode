const ch = document.getElementById('checkbox');

ch.addEventListener('change',() => {
    document.body.classList.toggle("dark");
})