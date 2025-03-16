// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark Mode Toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.innerText = '🌙 Dark Mode';
darkModeBtn.style.position = 'fixed';
darkModeBtn.style.top = '10px';
darkModeBtn.style.right = '10px';
darkModeBtn.style.padding = '10px';
darkModeBtn.style.border = 'none';
darkModeBtn.style.cursor = 'pointer';
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.innerText = document.body.classList.contains('dark-mode') ? '☀ Light Mode' : '🌙 Dark Mode';
});

// // Mobile Menu Toggle
// const nav = document.querySelector('nav ul');
// const toggleBtn = document.createElement('button');
// toggleBtn.innerText = '☰';
// toggleBtn.style.position = 'fixed';
// toggleBtn.style.top = '10px';
// toggleBtn.style.left = '10px';
// toggleBtn.style.padding = '10px';
// toggleBtn.style.border = 'none';
// toggleBtn.style.cursor = 'pointer';
// document.body.appendChild(toggleBtn);

// toggleBtn.addEventListener('click', () => {
//     nav.classList.toggle('show');
// });
