$("img.theme").click(function () {

    var htmlElement = $("html");

    if (htmlElement.attr("data-bs-theme") === "dark") {
        htmlElement.removeAttr("data-bs-theme");
    }
    else {
        htmlElement.attr("data-bs-theme", "dark");
    }

});
