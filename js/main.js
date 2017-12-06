
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});


        $(document).ready(function() { 
            var windowWidth = $(window).width();
            if(windowWidth > 768)$("#nav").addClass("navbar-fixed-top");
            else $("#nav").removeClass("navbar-fixed-top ");
            
            $(window).resize(function(){
                var windowWidth = $(window).width();
                if(windowWidth > 768)$("#nav").addClass("navbar-fixed-top");
                else $("#nav").removeClass("navbar-fixed-top");
            });
        });
    