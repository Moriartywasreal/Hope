/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
   console.log(e);
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 1;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                console.log($('.carousel-item').eq(i));
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                console.log($('.carousel-item').eq(0));
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});