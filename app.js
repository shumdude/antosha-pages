let tg = window.Telegram.WebApp;  // окно

tg.expand();  // расширение окна по высоте экрана

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#80b5f8";

let btn = document.getElementById("btn");  // получаем кнопку по id bth из html
let user = document.getElementById("user");
// слушатель события нажатия кнопки
btn.addEventListener("click", function () {
    tg.MainButton.setText("AAA");
    let data = tg.initData;
    user.textContent = "AAAAA";
    tg.MainButton.show();
    tg.sendData("sendTestMessage");  // отправка в телеграм бота
});