let slides = document.querySelectorAll(".slides");
let dots = document.querySelectorAll(".dot");
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let slideIndex = 0;

function prevSlide(){

    slideIndex--

    if(slideIndex > -1){

        for(let index = 0; index < slides.length; index++){
            slides[index].classList.add('hide');
            dots[index].classList.remove('active');
        }

        slides[slideIndex].classList.remove('hide');
        dots[slideIndex].classList.add('active');

    }else{
        slideIndex = 0;
    }

 
}

function nextSlide(){
    
    slideIndex++;

    if(slideIndex < slides.length){
        
        for (let index = 0; index < slides.length; index++) {
            slides[index].classList.add('hide');
            dots[index].classList.remove('active');
        }

        slides[slideIndex].classList.remove('hide');
        dots[slideIndex].classList.add('active');

    }else{
        slideIndex = slides.length - 1;
    }

}

function automaticSlide(){

    slideIndex++;

    if(slideIndex < slides.length){

        for (let index = 0; index < slides.length; index++) {
            slides[index].classList.add('hide');
            dots[index].classList.remove('active');
        }

        slides[slideIndex].classList.remove('hide');
        dots[slideIndex].classList.add('active');

    }else{
        slideIndex = -1;
    }
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

setInterval(automaticSlide, 4000);