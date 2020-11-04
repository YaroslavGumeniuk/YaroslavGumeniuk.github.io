function myInfo() {
    let infoBtn = document.createElement('div');
    let infoBlock = document.createElement('div');
    let close = document.createElement('div');

    infoBtn.innerHTML = "Что реализовано <br> в этом проекте?"
    infoBlock.innerHTML = "Страница сверстана по БЭМу с использованием Gulp, SASS, FlexBox, адаптирована под мобильные устройства. Также здесь реализовано: <br><br> 1. Модальные окна (кнопка 'Заказать консультацию/звонок'). <br> 2. Анимации CSS (секция 'Наши преимущества', секция 'Отзывы клиентов'). <br> 3. Табы (секция 'Каталог'). <br> 4. Слайдер. <br> 5. Формы и валидация форм. <br> 6. Маска ввода номера телефона. <br> 7. Отправка писем с сайта. <br> 8. Скролл по ссылкам и элемент 'вверх'. <br> 9. Смена информации на карточке товара (кнопка 'ПОДРОБНЕЕ'). <br> 10. Интерактивная карта."
    close.innerHTML = "&times";

    infoBtn.style.cssText = `
                // display: none;
                position: fixed;
                background: rgba(255, 245, 255, 0.7);
                transition: ease-in 0.7s all;
                width: 300px;
                height: 100px;
                border: 3px solid red;
                left: 200px;
                top: 150px;
                border-radius: 20px;
                cursor: pointer;
                font-size: 30px;
                color: #2546bc;
                text-align: center;
                line-height: 46px;
            `;

    infoBlock.style.cssText = `
                display: none;
                opacity: 0;
                position: fixed;
                padding: 15px;
                font-size: 18px;
                background: rgba(255, 245, 255, 0.7);
                transition: ease-in 0.7s all;
                width: 480px;
                min-height: 500px;
                border: 2px solid #2546bc;
                left: 200px;
                top: 150px;
                border-radius: 20px;
            `;

    close.style.cssText = `
                position: fixed;
                left: 685px;
                top: 145px;
                width: 50px;
                height: 50px;
                font-size: 60px;
                color: red;
                line-height: 42px;
                text-align: center;
                cursor: pointer;
            `;

    document.body.append(infoBtn);
    document.body.append(infoBlock);
    infoBlock.append(close);

    function showBlock() {
        infoBtn.style.display = 'none';
        infoBtn.style.opacity = '0';
        infoBlock.style.display = 'block';
        setTimeout(() => {
            infoBlock.style.opacity = '1';
        }, 20);
    }

    function hideBlock() {
        infoBtn.style.display = 'block';
        setTimeout(() => {
            infoBtn.style.opacity = '1';
        }, 20);
        infoBlock.style.opacity = '0';
        setTimeout(() => {
            infoBlock.style.display = 'none';
        }, 500);
    }

    infoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showBlock();
    })

    close.addEventListener('click', () => {
        hideBlock();
    })

    document.addEventListener('click', (e) => {
        hideBlock();
    })
}

myInfo();