jQuery(function ($) {


// Fake Radio

    var selected = null;

    $.fn.fakeRadlo = function () {
        var me = this;
        var myname = $(me).attr('name');



        var img = $('<div>', {class: 'fake_radio'})
                .click(function (e) {
                    e.stopPropagation();

                    $('input[name=' + myname + ']').prop('checked', false);
                    $('.fake_radio').removeClass('active');

                    $(me).prop('checked', true);
                    img.addClass('active');
                    selected = true;
                });

        $(me).after(img);
    };

    $("input[type=radio]").each(function () {
        $(this).fakeRadlo();
    });




// Calendar

    $('.calendar-archives').archivesCW({
        // cal = the calendar instance;
        // actual = visible month/year element reference;
        // goTo = next year/month element reference
        goNext: function (cal, actual, goTo)
        {
            /// EDIT THIS CODE TO CHANGE ANIMATION
            cal.find('.archives-years .year')
                    .css({
                        'margin-left': '-100%',
                        'opacity': 1
                    });
            // animation for the year/month actually visible
            cal.find('.archives-years .year[rel=' + actual + ']')
                    .css({
                        'margin-left': 0,
                        'z-index': 2
                    })
                    .animate({
                        'opacity': .5
                    }, 300);
            // animation for the year/month to show
            cal.find('.archives-years .year[rel=' + goTo + ']')
                    .css({
                        'z-index': 3
                    })
                    .animate({
                        'margin-left': 0
                    });
        },
        goPrev: function (cal, actual, goTo)
        {
            /// EDIT THIS CODE TO CHANGE ANIMATION
            cal.find('.archives-years .year:not(.last)')
                    .css({
                        'margin-left': '-100%',
                        'opacity': 1
                    });
            // animation for the year/month actually visible
            cal.find('.archives-years .year[rel=' + actual + ']')
                    .css({
                        'margin-left': 0,
                        'z-index': 3
                    }).animate({
                'margin-left': '-100%'
            });
            // animation for the year/month to show
            cal.find('.archives-years .year[rel=' + goTo + ']')
                    .css({
                        'margin-left': 0,
                        'opacity': .3,
                        'z-index': 2
                    }).animate({
                'opacity': 1
            }, 300);
        },
        showDropdown: function (menu)
        {
            // to show the select year/month menu
            // show('fast'); show('slow'); show(450) = 450ms;
            // or another code for the animation, be creative;
            menu.show();
        },
        hideDropdown: function (menu)
        {
            // to hide the select year/month menu
            // hide('fast'); hide('slow'); hide(450) = 450ms;
            // or another code for the animation, be creative;
            menu.hide();
        }
    });
    
    
    $('.calendar-archives').click(function(e){
        e.stopPropagation();
    });


});