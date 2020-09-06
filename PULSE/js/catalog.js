const multiItemCatalog = function (selector) {
    let mainElement = document.querySelector(selector), // основный элемент блока
        tabMenu = mainElement.querySelector(".catalog__tabs"),
        tabs = mainElement.querySelectorAll(".catalog__tab"),
        catalogContent = mainElement.querySelectorAll(".catalog__content"),
        detailBtns = mainElement.querySelectorAll(".catalog-item__link"),
        backBtns = mainElement.querySelectorAll(".catalog-item__back"),
        contents = mainElement.querySelectorAll(".catalog-item__content"),
        lists = mainElement.querySelectorAll(".catalog-item__list");

    catalogContent.forEach((item, index) => {
        ((index) => {
            let currentTab = tabs[index];
            let arrTabs = Array.from(mainElement.querySelectorAll(".catalog__tab"));
            currentTab.onclick = () => {
                catalogContent.forEach((item) => {
                    let display = window.getComputedStyle(item).display;
                    if (display == "flex") {
                        item.style.display = "none";
                        item.style.opacity = "0";
                    }
                });
                catalogContent[index].style.display = "flex";
                setTimeout(function () {
                    catalogContent[index].style.opacity = "1";
                }, 20);
                arrTabs.forEach((item) => {
                    item.classList.remove("catalog__tab_active");
                });
                currentTab.classList.add("catalog__tab_active");
            };
        })(index);
    });

    // for (let i = 0; i < tabs.length; i++) {
    //     ((i) => {
    //         let currentTab = tabs[i];
    //         let arrTabs = Array.from(mainElement.querySelectorAll(".catalog__tab"));
    //         currentTab.onclick = () => {
    //             catalogContent.forEach((item) => {
    //                 let display = window.getComputedStyle(item).display;
    //                 if (display == "flex") {
    //                     item.style.display = "none";
    //                 }
    //             });
    //             catalogContent[i].style.display = "flex";
    //             arrTabs.forEach((item) => {
    //                 item.classList.remove("catalog__tab_active");
    //             });
    //             currentTab.classList.add("catalog__tab_active");
    //         };
    //     })(i);
    // }

    // const activateTab = function () {
    //     tabMenu.addEventListener("click", (e) => {
    //         let targeTab = e.target.closest(".catalog__tab");
    //         let arrTabs = Array.from(mainElement.querySelectorAll(".catalog__tab"));
    //         arrTabs.forEach((item) => {
    //             item.classList.remove("catalog__tab_active");
    //         });
    //         targeTab.classList.add("catalog__tab_active");
    //     });
    // };

    // tabs.forEach(function (item, index) {
    //     item.addEventListener("click", function (e) {
    //         e.preventDefault();
    //         catalogContent.forEach(function (item) {
    //             item.classList.remove("catalog__content_active");
    //         });
    //         catalogContent[index].classList.add("catalog__content_active");
    //     });
    // });

    // tabs.forEach(function (item, index) {
    //     item.addEventListener("click", activateTab);
    //     item.addEventListener("click", function (e) {
    //         e.preventDefault();
    //         catalogContent.forEach(function (item) {
    //             item.classList.remove("catalog__content_active");
    //         });
    //         catalogContent[index].classList.add("catalog__content_active");
    //     });
    // });

    const changeCardInfo = function () {
        detailBtns.forEach(function (item, index) {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                if (contents[index].classList.contains("catalog-item__content_active")) {
                    contents[index].classList.remove("catalog-item__content_active");
                    lists[index].classList.add("catalog-item__list_active");
                }
            });
        });

        backBtns.forEach(function (item, index) {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                if (lists[index].classList.contains("catalog-item__list_active")) {
                    lists[index].classList.remove("catalog-item__list_active");
                    contents[index].classList.add("catalog-item__content_active");
                }
            });
        });
    };

    changeCardInfo();
};

const catalog = multiItemCatalog(".catalog");
