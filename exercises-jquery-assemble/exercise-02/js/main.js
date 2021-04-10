$(document).ready(function() {
  var valueLocal = localStorage.getItem("text");
  var getActiveIndex = parseInt(localStorage.getItem("activeIndex"));
  if(!getActiveIndex) {
    $(".header__list--item:nth-child(1)").attr("id", "active");
    $("#main").load("./news.html");
    // console.log("asdf");
  } else {
    $(`.header__list--item:nth-child(${getActiveIndex+1})`).attr("id", "active");
  }

  if(valueLocal === "news") {
    $("#main").load("./news.html")
  } else if(valueLocal === "images") {
    $("#main").load("./images.html")
  } else if(valueLocal === "seo") {
    $("#main").load("./seo.html")
  }

  $(".header__list--item").click(function() {
    var getText = $(this).attr("data-value");
    var activeIndex = $(this).index();

    $('.nav-pills li:nth-child('+activeIndex+')').addClass('active');
    localStorage.setItem("text", getText);
    localStorage.setItem("activeIndex", activeIndex);
    if(getText === "news") {
      $("#main").load("./news.html")
    } else if(getText === "images") {
      $("#main").load("./images.html")
    } else if(getText === "seo") {
      $("#main").load("./seo.html")
    }

    $(".header__list--item").attr("id", "");
    $(this).attr("id", "active");
  })
})