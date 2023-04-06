    /*Пояснения к скрипту*/
    const btn = document.querySelector('#logo'); /*Тут я выбрал, что взять за кнопку для переключения. Сначала хотел кнопку сделать, а потом вспомнил про лого*/
    const body = document.querySelector('body'); /*Тут я просто выбрал, что боди это body*/
    const text = document.querySelectorAll('h1, h2, p, a, span'); /*Тут я выбрал все селекторы, которые будут изменяться*/

    btn.addEventListener('click', () => { /*Тут сделал лямбда-выражение на клик. Не знаю, насколько хорошая идея - привык к другому языку*/
        if (body.classList.contains('dark')) { /*Самое интересное: если в классе есть dark, то я его удаляю и для каждого элемента применяю черный цвет*/
            body.classList.remove('dark');
            text.forEach(element => {
                element.style.color = '#2B2B2B';
            });
        } else {
            body.classList.add('dark'); /*Тут напротив: если в классе нет dark, то я его добавляю и для каждого элемента применяю белый цвет*/
            text.forEach(element => {
                element.style.color = '#FFFFFF';
            });
        }
    });