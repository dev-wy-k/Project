

    let screenHeight = $(window).height();
    console.log(screenHeight);

    $(window).scroll(function (){
        let currentPostion = $(this).scrollTop();
        // console.log(currentPostion);

        if(currentPostion >= screenHeight-50){
            $(".site-nav").addClass("site-nav-scroll")
        }
        else{
            $(".site-nav").removeClass("site-nav-scroll")
            setActive('home')
        }
    });



    // menuicon ပြောင်း 
    $(".navbar-toggler").click(function (){
        let result = $(".navbar-collapse").hasClass("show");
        // console.log(result);

        if(result){
            $(".menu-icon").removeClass("fa-times").addClass("fa-bars")
        }
        else{
            $(".menu-icon").removeClass("fa-bars").addClass("fa-times")
            
        }
    });
    // menuicon ပြောင်း 



// wayponit start

    function setActive(current){
        $(".nav-link").removeClass('current-section')
        $(`.nav-link[href='#${current}']`).addClass('current-section')

    };

    function navScorll() {

        let currentSection = $("section[id]");
        currentSection.waypoint(function (direction){

            if(direction == "down"){
                let currentSectionId = $(this.element).attr("id") ;
                // console.log(currentSectionId);
                setActive(currentSectionId)
            }
        },{ offset : "5%" });

        currentSection.waypoint(function (direction) {
            if(direction == "up"){
                let currentSectionId = $(this.element).attr("id") ;
                // console.log(currentSectionId);
                setActive(currentSectionId)
            }
        },{ offset : "-20%" });
    };
    navScorll();


// waypoint end 

        




// wow start

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();



$('.pricing-slide').slick({
arrows: false,
dots: true,
infinite: true,
speed: 300,
slidesToShow: 3,
slidesToScroll: 3,
responsive: [
{
breakpoint: 1024,
settings: {
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  dots: true
}
},
{
breakpoint: 769,
settings: {
  slidesToShow: 2,
  slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
  slidesToShow: 1,
  slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
// wow end

//  // waypoint start
//  var waypoints = $('#home').waypoint(function(direction) {
//     console.log("I'm Home");
//     $(".nav-link").removeClass("current-section")
//     $(".nav-link[href='#home']").addClass("current-section");
// }, {
//     offset: '5%'
// });

// var waypoints = $('#about').waypoint(function(direction) {
//     console.log("I'm About");
//     $(".nav-link").removeClass("current-section")

//     $(".nav-link[href='#about']").addClass("current-section");
// }, {
//     offset: '5%'
// });

// var waypoints = $('#services').waypoint(function(direction) {
//     console.log("I'm Services");
//     $(".nav-link").removeClass("current-section")

//     $(".nav-link[href='#services']").addClass("current-section");
// }, {
//     offset: '5%'
// });

// var waypoints = $('#pricing').waypoint(function(direction) {
//     console.log("I'm Pricing");
//     $(".nav-link").removeClass("current-section")

//     $(".nav-link[href='#pricing']").addClass("current-section");
// }, {
//     offset: '5%'
// });

// var waypoints = $('#contact').waypoint(function(direction) {
//     console.log("I'm Contact");
//     $(".nav-link").removeClass("current-section")

//     $(".nav-link[href='#contact']").addClass("current-section");
// }, {
//     offset: '5%'
// });
// // waypoint end


// loading start

$(window).on("load", function(){
    $(".loader-container").fadeOut(500, function(){
        $(this).remove();
    });
});


// loadind end 