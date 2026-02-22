$(".nav-home").click(function() {
            
            $("html, body").animate({
                scrollTop: $("#home").offset().top - 30
            }, 1000); 
            close();

            return false;
        });
         $(".nav-about").click(function() {
            
            $("html, body").animate({
                scrollTop: $("#about").offset().top - 30
            }, 1000); 
            close();
            return false;
        });
         $(".nav-cont").click(function() {
            
            $("html, body").animate({
                scrollTop: $("#services").offset().top - 30
            }, 1000); 
            close();
            return false;
        });
         $(".nav-link").click(function() {
            
            $("html, body").animate({
                scrollTop: $("#contact").offset().top - 30
            }, 1000); 
            close();
            return false;
        });
         $(".nav-div").click(function() {
            
            $("html, body").animate({
                scrollTop: $("#div").offset().top - 30
            }, 1000); 
            close();
            return false;
        });
        $(window).scroll(function(){
    if($(window).scrollTop() > 50){
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
});
