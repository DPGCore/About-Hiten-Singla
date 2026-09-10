document.addEventListener("DOMContentLoaded",()=>{
  const items=document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){items.forEach(x=>x.classList.add("visible"));return}
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})
  },{threshold:.12,rootMargin:"0px 0px -40px 0px"});
  items.forEach((item,i)=>{item.style.transitionDelay=Math.min(i*35,240)+"ms";observer.observe(item)});
});