var Katara = "https://i.pinimg.com/originals/6e/23/c3/6e23c36632ef788291453b0a638a0e93.jpg";
var Toph = "https://i.pinimg.com/originals/17/e0/27/17e02704fac304a423cb1fa16a58773f.jpg";
var Sokka ="https://c4.wallpaperflare.com/wallpaper/33/968/874/avatar-anime-avatar-the-last-airbender-sokka-avatar-wallpaper-preview.jpg";
var Zuko = "https://i.pinimg.com/originals/fe/2d/05/fe2d05b7dc332fdfc45662da51805196.jpg";

var counter = 0;

$(".submit").click(function(){
                   var playful= $(".playful").val();
                   var gender= $(".gender").val();

if (playful > 5 && gender === "Female"){
    $(".results").show(); $(".results").append("<img src= https://i.pinimg.com/originals/17/e0/27/17e02704fac304a423cb1fa16a58773f.jpg>");}


else if (playful < 5 && gender === "Female"){
 $(".results").show(); $(".results").append("<img src= https://i.pinimg.com/originals/6e/23/c3/6e23c36632ef788291453b0a638a0e93.jpg>");}


else if (playful > 5 && gender === "Male"){
 $(".results").show();
    $(".results").append("<img src= https://c4.wallpaperflare.com/wallpaper/33/968/874/avatar-anime-avatar-the-last-airbender-sokka-avatar-wallpaper-preview.jpg>");}


else if (playful < 5 && gender === "Male"){
 $(".results").show(); $(".results").append("<img src= https://i.pinimg.com/originals/fe/2d/05/fe2d05b7dc332fdfc45662da51805196.jpg>");}

counter=counter + 1;
 $(".counter").text("This quiz has been taken " + counter + " times");
});

