//Now Start JQuery

$(document).ready(function () {
    //Hold With Variable
    var docWidth = $('body').width(),
        $wrap = $('#wrap'),
        $images = $('#wrap .main'),
        slidesWidth = $wrap.width();

    //When Wnidow Load Then Its Work
    $(window).on('resize', function () {
        docWidth = $('body').width();
        slidesWidth = $wrap.width();
    })

    //Mousemove Working 
    $(document).mousemove(function (e) {
        var mouseX = e.pageX,
            offset = mouseX / docWidth * slidesWidth - mouseX / 2;

        $images.css({
            'transform': 'translate3d(' + -offset + 'px,0,0)'
        });
    });
});

