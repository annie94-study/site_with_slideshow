// // searchbox animation

//  $(document).ready(function(){
//     var submitIcon = $('.searchbox-icon');
//     var inputBox = $('.searchbox-input');
//     var searchBox = $('.searchbox');
//     var isOpen = false;
//     submitIcon.click(function(){
//         if(isOpen == false){
//             searchBox.addClass('searchbox-open');
//             inputBox.focus();
//             isOpen = true;
//         } else {
//             searchBox.removeClass('searchbox-open');
//             inputBox.focusout();
//             isOpen = false;
//         }
//     });  
//      submitIcon.mouseup(function(){
//             return false;
//         });
//     searchBox.mouseup(function(){
//             return false;
//         });
//     $(document).mouseup(function(){
//             if(isOpen == true){
//                 $('.searchbox-icon').css('display','block');
//                 submitIcon.click();
//             }
//         });
//     });
//     function buttonUp(){
//         var inputVal = $('.searchbox-input').val();
//         inputVal = $.trim(inputVal).length;
//         if( inputVal !== 0){
//             $('.searchbox-icon').css('display','none');
//         } else {
//             $('.searchbox-input').val('');
//             $('.searchbox-icon').css('display','block');
//     }
// }




// slideshow animation 

window.addEventListener("DOMContentLoaded", showSlides, false);


var slideIndex = 0;
var waitSeconds = 0;
showSlides();

function plusSlides(n) {
  waitSeconds = 7.5;
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  waitSeconds = 7.5;
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function showSlides() {
    if (waitSeconds == 0) { 
      slideIndex++;
      showSlide(slideIndex)
      setTimeout(showSlides, 7500);
    } else {
      pendSlides();
    }
}

function pendSlides() {
    if (waitSeconds > 0) {
      waitSeconds -= 0.5;
      setTimeout(pendSlides, 500);
    } else {
      showSlides();
    }
}
