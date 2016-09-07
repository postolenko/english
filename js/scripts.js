$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});



    });


    $(".wrapper").css({"min-height" : $(window).height() + "px"});

    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});


    var countNumList = $(".mark-num-list").length - 1;
    var forCountNumList = 0;


    var countNumLi = $(".mark-num-list li").length - 1;
    var forCountNumLi = 0;

    for ( forCountNumList = 0; forCountNumList <= countNumList; forCountNumList++ ) {

        forCountNumLi = 0;

        for ( forCountNumLi = 0; forCountNumLi <= countNumLi; forCountNumLi++ ) {

            $(".mark-num-list:eq("+ forCountNumList +") li:eq("+ forCountNumLi +")").prepend("<span class='li-num'>" + (forCountNumLi + 1) + "</span>");

        }

    }


		

});