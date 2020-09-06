const showModalWindows = function (selector) {
    let overlay = document.querySelector(".overlay"); // фоновое окно
    let consultationBtns = document.querySelectorAll(".button_consultation"); // кнопки заказазть звонок и консультацию
    let consultationWindow = document.querySelector("#consultation"); // окно заказать консультацию
    let modalCloseBtns = document.querySelectorAll(".modal__close"); // кнопка закрыть оно (крестик)
    let orderBtns = document.querySelectorAll(".button_catalog"); // кнопки "купить" на карточках
    let orderWindow = document.querySelector("#order"); // окно Ваш заказ

    // анимированный display block
    const showDisplayAnimation = (node) => {
        node.style.display = "block";
        setTimeout(function () {
            node.style.opacity = "1";
        }, 20);
    };

    // анимированный display none
    const hideDisplayAnimation = (node) => {
        node.style.opacity = "0";
        setTimeout(function () {
            node.style.display = "none";
        }, 500);
    };

    // показать окно
    const showWindow = (bg, modalWindow) => {
        showDisplayAnimation(bg);
        modalWindow.style.display = "block";
    };

    // показать окно консультации
    const showConsultWindow = () => {
        showWindow(overlay, consultationWindow);
    };

    // показать окно покупки товара
    const showOrdertWindow = () => {
        showWindow(overlay, orderWindow);
    };

    // закрыть окно
    const closeWindows = () => {
        hideDisplayAnimation(overlay);
        consultationWindow.style.display = "none";
        orderWindow.style.display = "none";
    };

    consultationBtns.forEach((item) => {
        item.addEventListener("click", showConsultWindow);
    });

    orderBtns.forEach((item, index) => {
        let productTitles = document.querySelectorAll(".catalog-item__subtitle"); // надписи на карточках
        let modalCardTitle = document.querySelector(".modal__descr_order"); // надпись на карточке окна
        item.addEventListener("click", () => {
            let currentCardTitle = productTitles[index].textContent; // надпись на текущей карточке
            modalCardTitle.textContent = currentCardTitle;
        });
        item.addEventListener("click", showOrdertWindow);
    });

    modalCloseBtns.forEach((item) => {
        item.addEventListener("click", closeWindows);
    });
};

const modalWindows = showModalWindows();
