
// Minimal JS: smooth scroll for in-page anchors & highlight active link
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Active link
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar .nav-link').forEach(link=>{
  if(link.getAttribute('href') === path){ link.classList.add('active'); }
});
