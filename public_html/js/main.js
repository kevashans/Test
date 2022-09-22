const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobileMenu');

var clock = new Date();
document.getElementById("date").innerHTML = clock.toUTCString();

let en = document.getElementsByClassName("lang_en");
let es = document.getElementsByClassName("lang_es");
let i;

function changeLangEN()
            {
                for (i = 0; i < en.length; i++) 
                    {
                        en[i].style.height = "initial";
                        en[i].style.visibility = "visible";
                        es[i].style.height = "0";
                        es[i].style.visibility = "hidden"; 
                    }
                
            }
            
function changeLangES()
            {
                for (i = 0; i < en.length; i++) 
                    {
                        en[i].style.height = "0"; 
                        en[i].style.visibility = "hidden";
                        es[i].style.height = "initial";
                        es[i].style.visibility = "visible";                       
                    }
                
            }

hamburger.addEventListener('click', function(){
    this.classList.toggle('isActive');
    mobile_menu.classList.toggle('isActive');
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
