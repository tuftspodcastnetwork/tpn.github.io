$(document).ready(function(){
    
    $('#work').on('click', function(){
        $('.nav-item').css('color', '#adadad');
        $('#people-section').css('display','none');
        $('#about-section').css('display','none');
        $('#work-section').css('display','block').css('transition','0.2s');

        $('#work').addClass('selected-nav');
        $('#people').removeClass('selected-nav');
        $('#about').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

    $('#people').on('click',function() {
        $('.nav-item').css('color', '#adadad');
        $('#work-section').css('display','none');
        $('#about-section').css('display','none');
        $('#people-section').css('display','block').css('transition','0.2s');

        $('#people').addClass('selected-nav');
        $('#work').removeClass('selected-nav');
        $('#about').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

    $('#about').on('click', function(){
        $('.nav-item').css('color', '#adadad');
        $('#people-section').css('display','none');
        $('#work-section').css('display','none');
        $('#about-section').css('display','block').css('transition','0.2s');

        $('#about').addClass('selected-nav');
        $('#work').removeClass('selected-nav');
        $('#people').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });
    
        $.ajax({
        type: "GET",
        url: "portfolio-projects.json",
        success: function(data) {
            buildProjects(data);  
        },
        error: function (jqXHR, exception) {
            var msg = '';

            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
        }
    });

    function buildProjects(data){
        for ( var row = 0; row < data.length; row++ ){
            var pub = data[row]['pub'];
            var headline = data[row]['headline'];
            var subhead = data[row]['subhead'];
            var url = data[row]['url'];
            var thumb = data[row]['thumbnail'];

            if (pub == 'people') {
                $('#people-section').append('<div class="col-md-4 col-sm-4 col-xs-12"><figure class="effect-zoe"><img src="img/' + thumb + '" class="thumb"><figcaption><p class="headline">' + headline + ' <span class="subhead">' + subhead + '</span></p></figcaption></figure><div class="mobile-caption"><p class="info">' + headline + '</p></div></div>');         
            } else if (thumb.indexOf("projects") >= 0) { 
                $('#work-section').append('<div class="col-md-4 col-sm-4 col-xs-12"><span class="ribbon">' + pub +'</span><a href="'+ url +'" target="_blank"><figure class="effect-zoe"><img src="img/' + thumb + '" class="thumb"><figcaption><p class="headline"><span class="pub">' + pub +'</span><br><br>' + headline + '<br><span class="subhead">'+ subhead +'</span></p></figcaption></figure></a><div class="mobile-caption"> <span class="pub">' + pub + '</span><p class="info">' + headline + '<br><span class="subhead">' + subhead +'</span></p></div></div>');
            }
        }
    }  
});
