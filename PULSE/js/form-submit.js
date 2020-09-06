$("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize(),
    }).done(function () {
        $(this).find("input").val("");
        $("#consultation, #order").fadeOut();
        $(".overlay").css("opacity", "1");
        $(".overlay, #thanks").fadeIn("slow");
        $("form").trigger("reset");
    });
    return false;
});
