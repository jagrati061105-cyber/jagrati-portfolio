const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'✕':'☰';});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuBtn.textContent='☰';menuBtn.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const bars=document.querySelectorAll('.progress i');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.width=entry.target.dataset.width;observer.unobserve(entry.target);}}),{threshold:.5});
bars.forEach(bar=>observer.observe(bar));
