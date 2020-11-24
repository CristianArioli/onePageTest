function initializeLightBox(){
    $("a.gallery").fancybox().attr('data-fancybox', 'galeria');
}

function smoothAnimationForScrollSpy(){
    $("nav ul li:not(.socialIcons) a, #callToAction a").on('click', function(e) {

        e.preventDefault();
     
        var hash = this.hash;
    
        $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 300, function(){
     
            window.location.hash = hash;
          });
     
     });
}

$(document).ready(function(){	
   initializeLightBox();
   smoothAnimationForScrollSpy(); 
});
