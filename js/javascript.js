$(document).ready(function() {
    var reception1 = document.querySelector("#receptionm");
    var stall1 = document.querySelector("#stall1m");
    var stall2 = document.querySelector("#stall2m");
    var stall3 = document.querySelector("#stall3m");
    var stall4 = document.querySelector("#stall4m");
    var stall5 = document.querySelector("#stall5m");
    var stall6 = document.querySelector("#stall6m");
    document.querySelector('a-assets').addEventListener('loaded', function() {
        $(".bubblingG").hide();
    });

    document.querySelector("#receptionm").addEventListener("mouseenter", function(){
    	console.log("scb");
    });
    /*for recetion start*/

    reception1.addEventListener("mouseenter", function() {
        $(".expoinfo").show().find("p").append("Click here to register");
    });

    reception1.addEventListener("mouseleave", function() {
        clearInfo();
    });

    reception1.addEventListener("click", function() {
        clearInfo();
        $('.camera1').removeAttr("animation").removeAttr("animation__r");
        $('.camera1').attr('animation', 'property:position; dur:1000; to:62.62 3.2 29.015').attr('animation__r', 'property:rotation; dur:1000; to:0 -90 0');
        setTimeout(function() {
            $(".registerForm").fadeIn();
            clearInfo();
        }, 1500);

    });
    $(".registerForm .close, .enterExpo").click(function() {
        $(".registerForm").fadeOut();
        $('.camera1').removeAttr("animation").removeAttr("animation__r");
        $('.camera1').attr('animation', 'property:rotation; dur:500; to:0 0 0');
        setTimeout(function(){
        	$('.camera1').removeAttr("animation").removeAttr("animation__r");
        },600);


    });
    /*for recetion end*/

    /*for stall1 start*/

    stall1.addEventListener("mouseenter", function() {
        $(".expoinfo").show().find("p").append("Click here to visit Stall Number 1");
    });
    stall1.addEventListener("mouseleave", function() {
        clearInfo();
    });
    stall1.addEventListener("click", function() {
        clearInfo();
        $('.camera1').removeAttr("animation").removeAttr("animation__r");
        $('.camera1').attr('animation', 'property:position; dur:1000; to:62.62 3.2 11.966').attr('animation__r', 'property:rotation; dur:1000; to:0 -90 0');
        setTimeout(function() {
            $(".stall_info1").fadeIn();

            clearInfo();
        }, 1500);

    });
    $(".exitstall1").click(function() {
        $(".stall_info1").fadeOut();
        $('.camera1').removeAttr("animation").removeAttr("animation__r");
        $('.camera1').attr('animation', 'property:rotation; dur:500; to:0 0 0');
        $(".center_window").hide();
        setTimeout(function(){
        	$('.camera1').removeAttr("animation").removeAttr("animation__r");
        },600);

    });
    /*for stall1 end*/

    /*for stall2 start*/

    stall2.addEventListener("mouseenter", function() {
        $(".expoinfo").show().find("p").append("Click Here To Visit Stall Number 2");
    });
    stall2.addEventListener("mouseleave", function() {
        clearInfo();
    });
    stall2.addEventListener("click", function() {
        clearInfo();
        $('.camera1').removeAttr("animation").removeAttr("animation__r");
        $('.camera1').attr('animation', 'property:position; dur:1000; to:62.62 3.2 20.723').attr('animation__r', 'property:rotation; dur:1000; to:0 90 0');
        setTimeout(function() {
            $(".stall_info2").fadeIn();

            clearInfo();
        }, 1500);

    });
    $(".exitstall2").click(function() {
        $(".stall_info2").fadeOut();
        $('.camera1').removeAttr("animation").removeAttr("animation__r");
        $('.camera1').attr('animation', 'property:rotation; dur:500; to:0 0 0');
        $(".center_window").hide();
        setTimeout(function(){
        	$('.camera1').removeAttr("animation").removeAttr("animation__r");
        },600);
    });

    /*for stall2 end*/


    stall3.addEventListener("mouseenter", function() {
        $(".expoinfo").show().find("p").append("Coming Soon!");
    });
    stall3.addEventListener("mouseleave", function() {
        clearInfo();
    });

    stall4.addEventListener("mouseenter", function() {
        $(".expoinfo").show().find("p").append("Coming Soon!");
    });
    stall4.addEventListener("mouseleave", function() {
        clearInfo();
    });

    stall5.addEventListener("mouseenter", function() {
        $(".expoinfo").show().find("p").append("Coming Soon!");
    });
    stall5.addEventListener("mouseleave", function() {
        clearInfo();
    });

    stall6.addEventListener("mouseenter", function() {
        $(".expoinfo").show().find("p").append("Coming Soon!");
    });
    stall6.addEventListener("mouseleave", function() {
        clearInfo();
    });

    function clearInfo() {
        $(".expoinfo").hide().find("p").empty();
    }
    $(".stall_info .tabs ul li a").click(function(){
    	$(".center_window, .center_window > div").hide();
    	$(".stall_info .tabs ul li a").removeClass("active");
    	$(this).addClass("active");
    	var opentab = $(this).attr("data-tab");
    	console.log(opentab)
    	$(".center_window").show();
    	$("#"+opentab).show();
    });
});

// 	var cloth = document.querySelector("a-obj-model#clothes");

// 	var clothText = document.querySelector("a-text#clotheText");

// 	var barrel = document.querySelector("a-obj-model#barrel");



// 	cloth.addEventListener("mouseenter", function(){

// 		clothText.setAttribute("visible","true");

// 	});

// 	cloth.addEventListener("mouseleave", function(){

// 		clothText.setAttribute("visible","false");

// 	});

// 	barrel.addEventListener("mouseenter", function(){

// 		barrel.setAttribute("scale",{

// 			x:0.3,

// 			y:0.3,

// 			z:0.3

// 		});

// 	});

// 	barrel.addEventListener("mouseleave", function(){

// 		barrel.setAttribute("scale",{

// 			x:0.2,

// 			y:0.2,

// 			z:0.2

// 		});

// 	});

// // 	var box = document.querySelector("a-box");

// // var entity = document.querySelector("a-entity.text")

// // box.addEventListener("mouseenter", function(){

// // 	entity.setAttribute("visible", "true");

// // });

// // box.addEventListener("mouseleave", function(){

// // 	entity.setAttribute("visible", "false");

// // });

//   // var box = $("a-box");

//   // box.mouseenter(function(){

//   // 	console.log("enter");

//   // 	box.attr("scale","1.2 1.2 1.2");

//   // });

// // $("a-box").mouseenter(function(){

// // 	$(".text").attr("visible", "true");

// // });

//   // var x = 0;

//   // var y = 0;



//   // var screen_height = $(window).height();

//   // var screen_width = $(window).width();

//   // screen_height = 0.5 * screen_height;

//   // screen_width = 0.5 *screen_width;

//   // $(document).mousemove(function(e) {

//   //   x = e.clientX - screen_width;

//   //   y = e.clientY - screen_height;



//   //   x1 = (x / 50) ;

//   //   y1 = (y / 50);

//   //   console.log(x1 + " " + y1);

//   //   $("a-camera").attr("position", x1 + " " + y1 + " 0");

//   // });



// });
