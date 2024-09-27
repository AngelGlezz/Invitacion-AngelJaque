$(document).ready(function(){
    var countDownDate = new Date("Nov 30, 2024 15:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
            
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        $("#day").empty().append(days);
        $("#hour").empty().append(hours);
        $("#minute").empty().append(minutes);
        $("#second").empty().append(seconds);
            
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

    $(window).resize(function() {
        var widthSize = $(window).width();

        if (widthSize <= 768) {
            $(".main").click(function(){
                var close = $(this).hasClass('close');
        
                if (close) {
                    $(".navegacion-principal").css('display', 'none');
                    $(".nav-bg").css('height', '4.4rem');
                    $(".main").removeClass('close');
                } else {
                    $(".navegacion-principal").css('display', 'inline');
                    $(".nav-bg").css('height', 'auto');
                    $(".main").addClass('close');
                }
            });
        
            $(".main-item").click(function(){
                $(".navegacion-principal").css('display', 'none');
                $(".nav-bg").css('height', '4.4rem');
                $(".main").removeClass('close');
            });
        }
    });

    var widthSize = $(window).width();

    if (widthSize <= 768) {
        $(".main").click(function(){
            var close = $(this).hasClass('close');
    
            if (close) {
                $(".navegacion-principal").css('display', 'none');
                $(".nav-bg").css('height', '4.4rem');
                $(".main").removeClass('close');
            } else {
                $(".navegacion-principal").css('display', 'inline');
                $(".nav-bg").css('height', 'auto');
                $(".main").addClass('close');
            }
        });
    
        $(".main-item").click(function(){
            $(".navegacion-principal").css('display', 'none');
            $(".nav-bg").css('height', '4.4rem');
            $(".main").removeClass('close');
        });
    }

    Fancybox.bind("[data-fancybox]", {
        hideScrollbar: false,
      });
});