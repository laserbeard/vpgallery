

jQuery(document).ready(function($) {



  (function ( $ ) { 


    $.fn.myNewPlugin = function() {

        return this.each(function() {
          


//console.log(this);
        
        var me = $(this);

        // Thumbnails click

       $(me).on('click', '.content_gallery_previews a', function(e){
       
            e.preventDefault();

            var old_index = $(me).find('.content_gallery_previews li.active').index();


           $(me).find('.content_gallery_previews li.active').removeClass('active');


           $(this).parent().addClass('active');

            var new_index = $(this).parent().index();

           var  direction = (new_index > old_index) ? 'right' : 'left';

           load_next(direction);

        });


        

        // Load function

        function load_next(pos_class){


                /// Old remove

                var old_slide = $(me).find('.content_gallery_view .content_gallery_slide');



                 /// New add

                var src_url =  $(me).find('.content_gallery_previews li.active a').attr('href');


                var new_slide = $('<div>', {class: ('content_gallery_slide ' + pos_class)});



                 $(me).find('.content_gallery_view').append(new_slide);


                 var img = $('<img>', {src: src_url, class: 'fresh_load_img'}).on('load', function(){


                      var invert_direction = (pos_class == 'left') ? 'right' : 'left';
                      $(old_slide).addClass(invert_direction);
                     animateChange(old_slide, new_slide);
                 });



                new_slide.append(img);
            }







    // Display function

    function animateChange(old_slide, new_slide){

       $(new_slide).animate({
          display: 'block'},
          1, function() {
            $(this).removeClass('right').removeClass('left');

          });


         var descr =  $(me).find('.content_gallery_previews li.active .content_gallery_thumbnail_descr').html();
        
         $(me).find('#content_gallery_current_image_descr').html(descr);

        if( $(me).find('.content_gallery_previews li.active').is(':last-child')){
        	 $(me).find('#content_gallery_btn_next').hide();
        }else{
        	 $(me).find('#content_gallery_btn_next').show();
        }


        if( $(me).find('.content_gallery_previews li.active').is(':first-child')){
        	 $(me).find('#content_gallery_btn_prev').hide();
        }else{
        	 $(me).find('#content_gallery_btn_prev').show();
        }

        // End

        old_slide.animate({
          display: 'block'},
          1000, function() {
           
          $(this).remove();
        });
    }









    // NEXT =>

     $(me).find('#content_gallery_btn_next').click(function(e){
       
       var next =  $(me).find('.content_gallery_previews li.active').next();

        if(next.length > 0){

              $(me).find('.content_gallery_previews li.active').removeClass('active');

               $(next).addClass('active');

               load_next('right');
   
        }

    });








    // PREV <=

     $(me).find('#content_gallery_btn_prev').click(function(e){
       
       var prev =  $(me).find('.content_gallery_previews li.active').prev();

       if(prev.length > 0){
           $(me).find('.content_gallery_previews li.active').removeClass('active');


           $(prev).addClass('active');

           load_next('left');   
       }

    });

    



  // Start

    $(me).find('.content_gallery_previews li:eq(0)').addClass('active');

    load_next('right');  




        });

    };


    }( jQuery ));



    

    // Usage example:
    $('.vrgallery').myNewPlugin();



});