
$(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
        $('nav').addClass('header2');
    } else {
        $('nav').removeClass('header2');
    }
});



onload  = start;

function start(){	
    var i = 1;
    function Move(){ 	
        i = (i%4)+1;
        document.getElementById('i'+i).checked = true;
    }
    setInterval(Move,3000);
}