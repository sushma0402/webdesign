$(".hero-img").hide();
$(".hero").css("margin", "60px 150px 0 -450px");
$(".hero").css("column-gap", "600px");

$(".hero").animate({ margin: "60px 150px 0 150px", columnGap: "0" }, 1000);
$(".hero-img").fadeIn(1000);
