$("img.theme").click(function () {

    var htmlElement = $("html");

    if (htmlElement.attr("data-bs-theme") === "dark") {
        htmlElement.removeAttr("data-bs-theme");
    }
    else {
        htmlElement.attr("data-bs-theme", "dark");
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