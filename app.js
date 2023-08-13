let tg = window.Telegram.WebApp;  // окно

tg.expand();  // расширение окна по высоте экрана

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#80b5f8";

let btn = document.getElementById("btn");  // получаем кнопку по id bth из html

// слушатель события нажатия кнопки
btn.addEventListener("click", function () {
    tg.MainButton.setText(tg.initData);
    tg.MainButton.show();
    tg.sendData("sendTestMessage");  // отправка в телеграм бота
});