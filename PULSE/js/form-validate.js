const formsValidate = () => {
    const validateForm = (form) => {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                },
                phone: "required",
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите Ваше имя",
                    minlength: jQuery.validator.format("Количество символов должно быть не меньше {0} !"),
                },
                phone: "Пожалуйста, введите Ваш телефон",
                email: {
                    required: "Пожалуйста, введите Ваш e-mail",
                    email: "Неверный e-mail",
                },
            },
        });
    };

    validateForm("#consultation form");
    validateForm("#feed-form");
    validateForm("#order form");

    $("input[name=phone]").mask("+38 (999) 999-99-99");
};
formsValidate();
