const arrows = document.querySelectorAll('.arrow-down');
const dropdown = document.querySelectorAll('summary');

 dropdown.forEach((element)=>{
   element.addEventListener('click', ()=>{
        element.classList.toggle('rotate');
        element.classList.toggle('cl');
   })
 })