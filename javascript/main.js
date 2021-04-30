$(document).ready(function () {
    var header = document.getElementById("myDiv");
    var navLink = header.getElementsByClassName("navLink");
    for (var i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("activeLink");
            current[0].className = current[0].className.replace(" activeLink", "");
            this.className += " activeLink";
        });
    }
});
$('.carousel').carousel({
    interval: 4000
})


// $(document).ready(function () {
//     var movementStrength = 25;
//     var height = movementStrength / $(window).height();
//     var width = movementStrength / $(window).width();
//     $("#photo-image").mousemove(function (e) {
//         var pageX = e.pageX - ($(window).width() / 2);
//         var pageY = e.pageY - ($(window).height() / 2);
//         var newvalueX = width * pageX * -1 - 25;
//         var newvalueY = height * pageY * -1 - 50;
//         $('#photo-image').css("background-position", newvalueX + "px     " + newvalueY + "px");
//     });
// });