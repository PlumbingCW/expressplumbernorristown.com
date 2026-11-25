(function(){
var root=document.documentElement,mq=768;
function setMenu(o){root.classList.toggle('menu-open',o);var b=document.querySelector('.menu-toggle');if(b)b.setAttribute('aria-expanded',o?'true':'false')}
var mb=document.querySelector('.menu-toggle');
if(mb)mb.addEventListener('click',function(){setMenu(!root.classList.contains('menu-open'))});
var cl=document.querySelector('.drawer-close');if(cl)cl.addEventListener('click',function(){setMenu(false)});
var ov=document.querySelector('.mob-overlay');if(ov)ov.addEventListener('click',function(){setMenu(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
window.addEventListener('resize',function(){if(window.innerWidth>mq)setMenu(false)});
document.querySelectorAll('.faq-q').forEach(function(q){
q.addEventListener('click',function(){
var it=q.parentNode,a=it.querySelector('.faq-a'),open=it.classList.toggle('open');
q.setAttribute('aria-expanded',open?'true':'false');
a.style.maxHeight=open?a.scrollHeight+'px':'0px';
});});
})();
