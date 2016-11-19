/*global $ */
/*jslint node: true*/

function isIE() 
{
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0) // If Internet Explorer, return version number
    
        return true;
    
    else  // If another browser, return 0
    
       return false;
    
}

var main = function () {
    $('body').css('background-color', '#f2f2f2');
    
    // Resume circle animation
    $('.circle').hover(function () {
        $(this).effect('shake', {times:2, distance: 3}, 400 );
    });
    
    /* MENU CLICK */
    $('nav li').click(function () {
        // Scroll to footer if contact is clicked on
        if ($(this).hasClass('contact') === true) {
               
            $('html, body').animate({ 
            scrollTop: $(document).height()-$(window).height()-5}, 300).promise().then(function() {
               
                $('.icon').effect('shake', {times:1, distance: 7, direction: 'left'}, 200);
            }); 
            
            return;
        }
        // Return if active nav was clicked on
        if ($(this).hasClass('active-nav') === true) {
            return;
        }
        
        // Update active nav pointer
        $('.active-nav').removeClass('active-nav');
        $(this).addClass('active-nav');
        
        // Fade out old page
        $('.active').hide().removeClass('active');
        
        // Update active page pointer
        if ($(this).hasClass('home') === true)
            $('#home').addClass('active');
        else if ($(this).hasClass('portfolio') === true) {
            $('#portfolio').addClass('active');
            $('#portfolio').css('display', '');
        }
        else if ($(this).hasClass('resume') === true) {
            $('#resume').addClass('active');
            $('#resume').css('display', '');
        }
        
        // Fade in new active page
        $('.active').show();
       
        // Update container background color
        if ($(this).hasClass('home') === true) 
            $('body').css('background-color','#f2f2f2');
        else
            $('body').css('background-color','white');
    });
    
    /* HOME LINKS */
    $('.expand-resume').click(function () {
        // Update active nav pointer
        $('.active-nav').removeClass('active-nav');
        $('.resume').addClass('active-nav');
        
        $('.active').hide().removeClass('active');
        $('#resume').addClass('active');
        $('#resume').css('display', '');
        $('body').css('background-color','white');
        $('.active').show();
        $('html,body').scrollTop(0);
    });
    
    $('.expand-portfolio').click(function () {
        // Update active nav pointer
        $('.active-nav').removeClass('active-nav');
        $('.portfolio').addClass('active-nav');
        
        $('.active').hide().removeClass('active');
        $('#portfolio').addClass('active');
        $('#portfolio').css('display', '');
        $('body').css('background-color','white');
        $('.active').show();
        $('html,body').scrollTop(0);
    });
     
    /* PORTFOLIO EXPAND */
    $('#portfolio .more').click(function () {
        
        /* CENTER IMAGES */
        // Get pics
        var pic = $(this).closest('table').find('img');
        var expandedPic = $('#portfolio-expand img');
        
        // Get src and sync expanded photo
        var picSrc = pic.attr('src');
        expandedPic.attr('src', picSrc);
        
        // Center
        offset(expandedPic, $('#portfolio-expand .e-img-container'));
        
        /* DESCRIPTION */
        // Update title
        var title = $(this).closest('table').find('h2').text();
        $('#portfolio-expand h2').replaceWith('<h2>'+title+'</h2>');
        
        // Update date
        var date = $(this).closest('table').find('.date').text();
        $('#portfolio-expand .date').replaceWith('<p class="date">'+date+'</p>');
        
        // Update description
        var description = $(this).closest('table').find('.small').text();
        $('#portfolio-expand .small').replaceWith('<p class="small">'+description+'</p>');
        
         // Fade in and out
        $('#screen').css('display', '');
        $('#screen').fadeIn(150);
    });
    
    /* PORTFOLIO CLOSE */
    $('.close').click(function () {
        $('#screen').fadeOut(150);
    });
     
};

$(document).ready(main);

        