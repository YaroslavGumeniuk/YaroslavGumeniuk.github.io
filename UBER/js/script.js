window.addEventListener('DOMContentLoaded', () => {
    function hamburger() {
        const menu = document.querySelector('.menu'),
            menuItem = document.querySelectorAll('.menu_item'),
            hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    }

    function myInfo() {
        let infoBtn = document.createElement('div');
        let infoBlock = document.createElement('div');
        let close = document.createElement('div');

        infoBtn.innerHTML = "I"
        infoBlock.innerHTML = "Адаптированный под мобильные устройства проект <br> с использованием Bootstrap, Gulp, Sass."
        close.innerHTML = "&times";

        infoBtn.style.cssText = `
                // display: none;
                background: rgba(255, 245, 255, 0.5);
                transition: ease-in 0.7s all;
                width: 50px;
                height: 50px;
                border: 3px solid red;
                position: fixed;
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
                padding: 15px;
                font-size: 18px;
                background: rgba(255, 245, 255, 0.7);
                transition: ease-in 0.7s all;
                width: 490px;
                height: 85px;
                border: 2px solid #2546bc;
                position: fixed;
                left: 200px;
                top: 150px;
                border-radius: 20px;
            `;

        close.style.cssText = `
                position: fixed;
                left: 690px;
                top: 140px;
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

        infoBtn.addEventListener('click', () => {
            infoBtn.style.display = 'none';
            infoBtn.style.opacity = '0';
            infoBlock.style.display = 'block';
            setTimeout(() => {
                infoBlock.style.opacity = '1';
            }, 20);
        })

        close.addEventListener('click', () => {
            infoBtn.style.display = 'block';
            setTimeout(() => {
                infoBtn.style.opacity = '1';
            }, 20);
            infoBlock.style.opacity = '0';
            setTimeout(() => {
                infoBlock.style.display = 'none';
            }, 500);

        })
    }

    hamburger();
    myInfo();

})
