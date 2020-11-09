let {Given, When, Then} = require('cucumber');
const SignInPage = require("../pages/signInPage").default;
const MainPage = require("../pages/mainPage").default;

Given(/^Sing In$/, {timeout: 60000}, async function () {
    await MainPage.goToSignInPage();
    await SignInPage.logIn('sent-luis@yandex.ru', 'zxcvbnm');
});
