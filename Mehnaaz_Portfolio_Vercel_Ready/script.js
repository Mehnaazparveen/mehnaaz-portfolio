(()=>{
 const root=document.documentElement;
 const toggle=document.getElementById('themeToggle');
 const year=document.getElementById('year');
 if(year)year.textContent=String(new Date().getFullYear());
 let saved=null;
 try{saved=localStorage.getItem('mp-theme')}catch(e){}
 function setTheme(dark){
   root.dataset.theme=dark?'dark':'light';
   if(toggle){toggle.setAttribute('aria-pressed',String(dark));toggle.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');const txt=toggle.querySelector('.theme-text');if(txt)txt.textContent=dark?'Light':'Dark';const ico=toggle.querySelector('.theme-icon');if(ico)ico.textContent=dark?'☼':'◐'}
 }
 setTheme(saved==='dark');
 if(toggle)toggle.addEventListener('click',()=>{const dark=root.dataset.theme!=='dark';setTheme(dark);try{localStorage.setItem('mp-theme',dark?'dark':'light')}catch(e){}});
 const links=document.querySelectorAll('.rail-nav a');
 if('IntersectionObserver' in window){
   const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id))}})},{rootMargin:'-20% 0px -62% 0px',threshold:0});
   ['projects','about','journey','contact'].forEach(id=>{const s=document.getElementById(id);if(s)observer.observe(s)});
 }
})();