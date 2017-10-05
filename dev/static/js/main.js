$(document).ready(function () {
  $('.sandwich-menu').click(function() {
    $(this).toggleClass('active');
    $('ul.header_menu').toggle(900);
  });
    svg4everybody({});
});

var btn_prev = document.querySelector('chevron-left');
var btn_next = document.querySelector('chevron-right');

var images = document.querySelectorAll('.slide');
var i = 0;

btn_prev.onclick = function(){
     images[i].className = '';
     i = i - 1; /* i-- */
     
     if(i < 0){
         i = images.length - 1;
     }
     
     images[i].className = 'showed';
}

btn_next.onclick = function(){
     images[i].className = '';
     i = i + 1; /* i++ */
     
     if(i >= images.length){
         i = 0;
     }
     
     images[i].className = 'showed';
}


