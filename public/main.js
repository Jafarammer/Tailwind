const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// modal
const modal = document.querySelector('.modal');
const showModal = document.querySelector('.showModal');
const closeModal = document.querySelector('.closeModal');
showModal.addEventListener('click', function() {
  modal.classList.remove('hidden')
});
closeModal.addEventListener('click', function() {
  modal.classList.add('hidden')
});
// modal 1
const modalOne = document.querySelector('.modal1');
const showModalOne = document.querySelector('.showModal1');
const closeModalOne = document.querySelector('.closeModal1');
showModalOne.addEventListener('click', function() {
  modalOne.classList.remove('hidden')
});
closeModalOne.addEventListener('click', function() {
  modalOne.classList.add('hidden')
});

// modal 2
const modalTwo = document.querySelector('.modal2');
const showModalTwo = document.querySelector('.showModal2');
const closeModalTwo = document.querySelector('.closeModal2');
showModalTwo.addEventListener('click', function() {
  modalTwo.classList.remove('hidden')
});
closeModalTwo.addEventListener('click', function() {
  modalTwo.classList.add('hidden')
});

// modal slider
let container = document.querySelector('.container-modal');
let jumbo = document.querySelector('.jumbo');
let thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    // apakah yg diklik adalah thum
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb';
        });

        e.target.classList.add('actives');
    }
})
// modal slider 1
let containerOne = document.querySelector('.container-modal1');
let jumboOne = document.querySelector('.jumbo1');
let thumbsOne = document.querySelectorAll('.thumb1');

containerOne.addEventListener('click', function(e){
    // apakah yg diklik adalah thum
    if (e.target.className == 'thumb1') {
        jumboOne.src = e.target.src;
        jumboOne.classList.add('fade1');

        setTimeout(function(){
            jumboOne.classList.remove('fade1');
        }, 500);

        thumbsOne.forEach(function(thumb1){
            thumb1.className = 'thumb1';
        });

        e.target.classList.add('actives1');
    }
})

// modal slider 2
let containerTwo = document.querySelector('.container-modal2');
let jumboTwo = document.querySelector('.jumbo2');
let thumbsTwo = document.querySelectorAll('.thumb2');

containerTwo.addEventListener('click', function(e){
    // apakah yg diklik adalah thum
    if (e.target.className == 'thumb2') {
        jumboTwo.src = e.target.src;
        jumboTwo.classList.add('fade2');

        setTimeout(function(){
            jumboTwo.classList.remove('fade2');
        }, 500);

        thumbsTwo.forEach(function(thumb2){
            thumb2.className = 'thumb2';
        });

        e.target.classList.add('actives2');
    }
})

// latihan dom ini menggunakan dom traversal

// scrool reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200});
/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__text',{delay: 400}); 
/*SCROLL SKILLS*/
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});
/*SCROLL WORK*/
sr.reveal('.work__data',{interval: 200});
/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 