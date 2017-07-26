$(document).ready(function(){
    
    $('#work').on('click', function(){
        $('.nav-item').css('color', '#adadad');
        $('#producers-section').css('display','none');
        $('#about-section').css('display','none');
        $('#work-section').css('display','block').css('transition','0.2s');

        $('#work').addClass('selected-nav');
        $('#producers').removeClass('selected-nav');
        $('#about').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

    $('#producers').on('click',function() {
        $('.nav-item').css('color', '#adadad');
        $('#work-section').css('display','none');
        $('#about-section').css('display','none');
        $('#producers-section').css('display','block').css('transition','0.2s');

        $('#producers').addClass('selected-nav');
        $('#work').removeClass('selected-nav');
        $('#about').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

    $('#about').on('click', function(){
        $('.nav-item').css('color', '#adadad');
        $('#producers-section').css('display','none');
        $('#work-section').css('display','none');
        $('#about-section').css('display','block').css('transition','0.2s');

        $('#about').addClass('selected-nav');
        $('#work').removeClass('selected-nav');
        $('#producers').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });
});
