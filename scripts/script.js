document.addEventListener('DOMContentLoaded', function () {
    // JSON-данные встроены прямо в JavaScript
    const adventData = {
        1: { title: "1 декабря", image: "images/1.jpg", text: "Пусть этот месяц принесет тебе столько радости, сколько снежинок падает с неба." },
        2: { title: "2 декабря", image: "images/2.jpg", text: "С каждым днем ты становишься только прекраснее, как новогодняя звезда на небе." },
        3: { title: "3 декабря", image: "images/3.jpg", text: "Желаю тебе ощущать волшебство каждой минуты декабря и ловить в них моменты счастья." },
        4: { title: "4 декабря", image: "images/4.jpg", text: "Ты — самое ценное и красивое, что есть в этом мире. Желаю, чтобы в этот месяц сбудется всё, о чем ты мечтаешь." },
        5: { title: "5 декабря", image: "images/5.jpg", text: "Согрей свое сердце любовью, которая окутывает тебя в самые тёплые зимние дни." },
        6: { title: "6 декабря", image: "images/6.jpg", text: "Ты приносишь свет в мир, и пусть твоя яркость не тускнеет даже в самые снежные дни." },
        7: { title: "7 декабря", image: "images/7.jpg", text: "Ты моя вдохновляющая муза, и я горжусь, что могу идти рядом с тобой." },
        8: { title: "8 декабря", image: "images/8.jpg", text: "Желаю, чтобы этот месяц подарил тебе много ярких эмоций, тёплых объятий и волшебных моментов." },
        9: { title: "9 декабря", image: "images/9.jpg", text: "С каждым днём ты становишься ближе к своей мечте. Верь в себя, ты можешь всё!" },
        10: { title: "10 декабря", image: "images/10.jpg", text: "Ты — лучший подарок, который когда-либо существовал. Пусть с каждым днём твоя жизнь будет всё более волшебной." },
        11: { title: "11 декабря", image: "images/11.jpg", text: "Твоя улыбка — это всё, что нужно для того, чтобы сделать мой день особенным. Желаю тебе чаще дарить её." },
        12: { title: "12 декабря", image: "images/12.jpg", text: "Ты — невероятная, и я уверен, что этот месяц подарит тебе много удивительных сюрпризов." },
        13: { title: "13 декабря", image: "images/13.jpg", text: "Ты заслуживаешь только лучшего, и пусть весь декабрь будет полон самых лучших моментов." },
        14: { title: "14 декабря", image: "images/14.jpg", text: "Ты как новогодняя звезда, освещающая мой мир. Пусть твои мечты сбудутся." },
        15: { title: "15 декабря", image: "images/15.jpg", text: "С тобой всегда ощущаю тепло, даже в самые холодные зимние дни. Ты моя зимняя радость." },
        16: { title: "16 декабря", image: "images/16.jpg", text: "Пусть этот декабрь будет таким же ярким и неповторимым, как ты!" },
        17: { title: "17 декабря", image: "images/17.jpg", text: "С каждым днём ты даришь мне все больше счастья. Спасибо за твою любовь и заботу." },
        18: { title: "18 декабря", image: "images/18.jpg", text: "Ты — вдохновение для меня. Пусть твой день будет таким же ярким, как твоя душа." },
        19: { title: "19 декабря", image: "images/19.jpg", text: "С тобой каждый момент — как маленькое чудо. Пусть твои мечты сбудутся в этот прекрасный декабрь." },
        20: { title: "20 декабря", image: "images/20.jpg", text: "С тобой в мире стало намного ярче. Пусть этот год завершится так же красиво, как и начинался." },
        21: { title: "21 декабря", image: "images/21.jpg", text: "Ты — моё вдохновение. Пусть твои глаза всегда горят ярким светом, а сердце согревает любовь." },
        22: { title: "22 декабря", image: "images/22.jpg", text: "Желаю тебе, чтобы в каждый момент декабря ты чувствовала себя самой счастливой и любимой." },
        23: { title: "23 декабря", image: "images/23.jpg", text: "Ты — мой самый яркий свет в этом мире. Пусть каждый твой день будет полон радости и чудес." },
        24: { title: "24 декабря", image: "images/24.jpg", text: "С тобой каждый день становится особенным. Пусть этот месяц принесёт тебе только счастье." },
        25: { title: "25 декабря", image: "images/25.jpg", text: "С Рождеством, моя любовь! Пусть твоя жизнь будет полна чудес и волшебных моментов." },
        26: { title: "26 декабря", image: "images/26.jpg", text: "Ты, как снежинка — уникальная, неповторимая и совершенно невероятная. Пусть твоя жизнь будет полна волшебства!" },
        27: { title: "27 декабря", image: "images/27.jpg", text: "Пусть сердце твоё всегда будет полно любви, а каждый день дарит тебе счастье, которое ты заслуживаешь" },
        28: { title: "28 декабря", image: "images/28.jpg", text: "Ты — как рождественская звезда, которая освещает мой путь. Пусть каждый твой день будет полон свершений!" },
        29: { title: "29 декабря", image: "images/29.jpg", text: "Моя любовь к тебе бесконечна, и я хочу, чтобы каждый твой день был так же прекрасен, как и ты." },
        30: { title: "30 декабря", image: "images/30.jpg", text: "Твоя доброта и нежность делают мир лучше. Пусть декабрь принесёт тебе радость и тепло, которые ты даришь мне." },
        31: { title: "31 декабря", image: "images/31.jpg", text: "С Новым годом, моя любимая! Пусть 2025 год будет полон счастья, любви и вдохновения для нас обоих" }
    };

    const listItems = document.querySelectorAll('.advent__list-item');
    const popupOverlay = document.getElementById('popup-overlay');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const popupClose = document.querySelector('.popup-close');

    // Текущая дата
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    listItems.forEach(item => {
        const day = parseInt(item.getAttribute('data-day'));

        item.addEventListener('click', function () {
            if (day > currentDay) {
                popupText.innerHTML = `
                    <h2>Доступ закрыт</h2>
                    <img src="images/close.jpg" alt="">
                    <p>Солнышко! Этот день ещё не настал. Пожалуйста, дождись нужной даты!</p>
                `;
            } else {
                const dayData = adventData[day];
                if (dayData) {
                    popupText.innerHTML = `
                        <h2>${dayData.title}</h2>
                        <img src="${dayData.image}" alt="${dayData.title}">
                        <p>${dayData.text}</p>
                    `;
                } else {
                    popupText.innerHTML = `
                        <h2>Ошибка</h2>
                        <p>Данных для этого дня нет.</p>
                    `;
                }
            }

            popup.classList.add('show');
            popupOverlay.style.display = 'block';
        });
    });

    popupClose.addEventListener('click', function () {
        popup.classList.remove('show');
        popupOverlay.style.display = 'none';
    });

    popupOverlay.addEventListener('click', function () {
        popup.classList.remove('show');
        popupOverlay.style.display = 'none';
    });
});
