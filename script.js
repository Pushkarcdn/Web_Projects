$("img.theme").click(function () {

    var htmlElement = $("html");

    if (htmlElement.attr("data-bs-theme") === "dark") {
        htmlElement.removeAttr("data-bs-theme");
        document.getElementsByTagName("body")[0].style.backgroundColor = "#f8f8f8";

    }
    else {
        htmlElement.attr("data-bs-theme", "dark");
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    }

});


$(".linkedin-link").click(function () {
    window.open("https://www.linkedin.com/in/pushkarcdn");
})

$(".github-link").click(function () {
    window.open("https://www.github.com/pushkarcdn");
})

$(".instagram-link").click(function () {
    window.open("https://www.instagram.com/pushkarcdn");
})

$(".facebook-link").click(function () {
    window.open("https://www.facebook.com/pushkarcdn");
})

$(".website-link").click(function () {
    window.open("https://pushkar.com.np");
})