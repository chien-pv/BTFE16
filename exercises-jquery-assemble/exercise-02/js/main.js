$(document).ready(function() {
  var valueLocal = localStorage.getItem("text");

  if(valueLocal === "news") {
    $("#main").load("./news.html")
  } else if(valueLocal === "images") {
    $("#main").load("./images.html")
  } else if(valueLocal === "seo") {
    $("#main").load("./seo.html")
  }

  $(".header__list--item").click(function() {
    var getText = $(this).attr("data-value");
    localStorage.setItem("text", getText);

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