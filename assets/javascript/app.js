var start = $("start");
var startSlide = $("#startSlide");
var timeRemain = document.getElementById("txt");

setTimeout(function(){ timeRemain.value = "2 seconds" }, 2000);
setTimeout(function(){ timeRemain.value = "4 seconds" }, 4000);
setTimeout(function(){ timeRemain.value = "6 seconds" }, 6000);


start.on("click", function () {
    startSlide.hide();
    questionSlide.show();
});

// var questionSlide = $("#questionSlide");
// var startSlide = $("#startSlide");
// var winSlide = $("#winSlide");
// var loseSlide = $("#loseSlide");