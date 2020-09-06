const multiItemSlider = (function () {
    return function (selector, config) {
        let mainElement = document.querySelector(selector), // основный элемент блока
            sliderWrapper = mainElement.querySelector(".slider__wrapper"), // обертка для .slider-item
            sliderItems = mainElement.querySelectorAll(".slider__item"), // элементы (.slider-item)
            sliderControls = mainElement.querySelectorAll(".slider__control"), // элементы управления
            sliderControlLeft = mainElement.querySelector(".slider__control_left"), // кнопка "LEFT"
            sliderControlRight = mainElement.querySelector(".slider__control_right"), // кнопка "RIGHT"
            wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width), // ширина обёртки
            itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width), // ширина одного элемента
            positionLeftItem = 0, // позиция левого активного элемента
            transform = 0, // значение транфсофрмации .slider_wrapper
            step = (itemWidth / wrapperWidth) * 100, // величина шага (для трансформации)
            items = [], // массив элементов
            interval = 0,
            configSlider = {
                isCycling: false, // автоматическая смена слайдов
                direction: "right", // направление смены слайдов
                interval: 1500, // интервал между автоматической сменой слайдов
                pause: true, // устанавливать ли паузу при поднесении курсора к слайдеру
            };

        // предаем входные параметры, если они есть
        for (let key in config) {
            if (key in configSlider) {
                configSlider[key] = config[key];
            }
        }

        // наполнение массива items
        sliderItems.forEach(function (item, index) {
            items.push({
                item: item,
                position: index,
                transform: 0,
            });
        });

        let position = {
            getItemMin: function () {
                let indexItem = 0;
                items.forEach(function (item, index) {
                    if (item.position < items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            },
            getItemMax: function () {
                let indexItem = 0;
                items.forEach(function (item, index) {
                    if (item.position > items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            },
            getMin: function () {
                return items[position.getItemMin()].position;
            },
            getMax: function () {
                return items[position.getItemMax()].position;
            },
        };

        let transformItem = function (direction) {
            let nextItem;
            if (direction === "right") {
                positionLeftItem++;
                if (positionLeftItem + wrapperWidth / itemWidth - 1 > position.getMax()) {
                    nextItem = position.getItemMin();
                    items[nextItem].position = position.getMax() + 1;
                    items[nextItem].transform += items.length * 100;
                    items[nextItem].item.style.transform = "translateX(" + items[nextItem].transform + "%)";
                }
                transform -= step;
            }
            if (direction === "left") {
                positionLeftItem--;
                if (positionLeftItem < position.getMin()) {
                    nextItem = position.getItemMax();
                    items[nextItem].position = position.getMin() - 1;
                    items[nextItem].transform -= items.length * 100;
                    items[nextItem].item.style.transform = "translateX(" + items[nextItem].transform + "%)";
                }
                transform += step;
            }
            sliderWrapper.style.transform = "translateX(" + transform + "%)";
        };

        let cycle = function (direction) {
            if (!configSlider.isCycling) {
                return;
            }
            interval = setInterval(function () {
                transformItem(direction);
            }, configSlider.interval);
        };

        // обработчик события click для кнопок "назад" и "вперед"
        let controlClick = function (e) {
            if (e.target.classList.contains("slider__control")) {
                e.preventDefault();
                let direction = e.target.classList.contains("slider__control_right") ? "right" : "left";
                transformItem(direction);
                clearInterval(interval);
                // cycle(configSlider.direction); // при клике на кнопку цикл продолжается
            }
        };

        let setUpListeners = function () {
            // добавление к кнопкам "назад" и "вперед" обрботчика controlClick для событя click
            sliderControls.forEach(function (item) {
                item.addEventListener("click", controlClick);
            });

            if (configSlider.pause && configSlider.isCycling) {
                mainElement.addEventListener("mouseenter", function () {
                    clearInterval(interval);
                });
                mainElement.addEventListener("mouseleave", function () {
                    clearInterval(interval);
                    cycle(configSlider.direction);
                });
            }
        };

        // инициализация
        setUpListeners();
        cycle(configSlider.direction);

        return {
            right: function () {
                // метод right
                transformItem("right");
            },
            left: function () {
                // метод left
                transformItem("left");
            },
            stop: function () {
                // метод stop
                configSlider.isCycling = false;
                clearInterval(interval);
            },
            cycle: function () {
                // метод cycle
                configSlider.isCycling = true;
                clearInterval(interval);
                cycle();
            },
        };
    };
})();

let slider = multiItemSlider(".slider", {
    isCycling: true,
    interval: 2000,
});
