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


// var downloadPage;

// $("a.link").click(function(linkEvent) {

//     linkEvent.preventDefault();

//     downloadPage = $(this).attr("href");

//     if( downloadPage != "index.html" ) {

//         $(".content").html("");

//         $(".content").load(downloadPage, function(response, status, xhr) {

//             if (status == "error") {

//                 var msg = "Sorry but there was an error: ";

//             $(".content").html("Не удалось загрузить страницу ");

//             }

//         });

//     } else {

//         window.location = "index.html";

//     }


// });

    var dataLinkAttr;


    $("a.video-link").click(function(videoLinkEvent) {

        videoLinkEvent.preventDefault();

        dataLinkAttr = $(this).attr("data-link");

        $(".wrapper").append("<div class='video-box'></div>");

        setTimeout(function() {

            $(".video-box").load("video.html", function(response, status, xhr) {

                if (status == "error") {

                    $(".video-section").fadeIn(300);

                    $(".video-section").html("Не удалось видео");

                    setTimeout(function() {

                        $(".video-section").fadeOut(300);

                    },1000);

                    
                } else if (status == "success") {

                    $(".video-section").fadeIn(300);

                    $(".video-section iframe").attr("src",dataLinkAttr);

                        $(".video-section").click(function() {

                            $(".video-section").fadeOut(300);

                            setTimeout(function() {

                                $(".video-box").remove();

                            }, 500);

                        });

                }

            });

        }, 300);

    });


    // $(".jp-previous").html("<img src='img/prev_page.svg' alt='next'>");

    // $(".jp-next").html("<img src='img/next_page.svg' alt='next'>");

    $(".jp-previous").text("");

    $(".jp-next").text("");

		

});