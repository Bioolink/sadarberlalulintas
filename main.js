const dark = document.querySelector('.page1');
const tox = document.querySelector('.page3');
const btn = document.querySelector('.muton button');
const tex = document.querySelector('.img2 h3');
const tax = document.querySelector('.img2 p');
const tix= document.querySelector('nav');
btn.addEventListener('click', function(){
   dark.classList.toggle('gelap');
   tox.classList.toggle('gelap');
   tex.classList.toggle('putih'); 
   tax.classList.toggle('putih'); 
   tix.classList.toggle('putih'); 
   btn.classList.toggle('putuh');
});


// const page = document.querySelector('.page1');
// const btn = document.querySelector('.muton button');
// menuToggle.addEventListener('click', function () {
// nav.classList.toggle('slide');

// });
