let {Given, When, Then, Before, After} = require('cucumber');
const StorePage = require("../pages/storePage").default;
const Basket = require("../pages/basketPage").default;
const MainPage = require("../pages/mainPage").default;
const {expect} = require("chai");

When(/^I open basket$/, {timeout: 30000}, async function() {
    await StorePage.openMiniBasket();
    if(MainPage.acceptCookiesButton.isPresent() === true) {
        await MainPage.acceptCookies();
    }
    await Basket.checkoutSecurely();
});

When(/^I go to payment page$/, {timeout: 30000}, async function() {
    await Basket.checkoutNow();
});

Then(/^I see payment methods and Place an order to pay button$/, {timeout: 30000}, async function() {
     expect(await browser.getCurrentUrl()).to.contains(`Order/Payment`);
});
