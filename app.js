let tg = window.Telegram.WebApp; //получаем объект webapp телеграма

tg.expand(); //расширяем на все окно

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

let btn = document.getElementById("btn");
btn.addEventListener('click', function () { //вешаем событие на нажатие html-кнопки
    if (tg.MainButton.isVisible) { //если кнопка показана
        tg.MainButton.hide() //скрываем кнопку
    } else { //иначе
        tg.MainButton.show() //показываем
    }
});

let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать
btnED.addEventListener('click', function () { //вешаем событие на нажатие html-кнопки
    if (tg.MainButton.isActive) { //если кнопка показана
        tg.MainButton.setParams({"color": "#E0FFFF"}); //меняем цвет
        tg.MainButton.disable() //скрываем кнопку
    } else { //иначе
        tg.MainButton.setParams({"color": "#143F6B"}); //меняем цвет
        tg.MainButton.enable() //показываем
    }
});

// только с keyboard button (telegram menu button without BotFather)
Telegram.WebApp.onEvent('mainButtonClicked', function () {
    tg.sendData("some string that we need to send");
    //при клике на основную кнопку отправляем данные в строковом виде
});

let usercard = document.getElementById("usercard"); //получаем блок usercard

let profPhoto = document.createElement('img');
profPhoto.src = `${tg.initDataUnsafe.user.photo_url}`;
usercard.appendChild(profPhoto);

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `Твоё первое имя: ${tg.initDataUnsafe.user.first_name}
Твоё второе имя: ${tg.initDataUnsafe.user.last_name}
Твоё имя пользователя: @${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})
Бот? ${tg.initDataUnsafe.user.is_bot}
Есть премиум? ${tg.initDataUnsafe.user.is_premium}`;
usercard.appendChild(profName); //добавляем

let userid = document.createElement('p'); //создаем еще параграф
userid.innerText = `Твой ID: ${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем

