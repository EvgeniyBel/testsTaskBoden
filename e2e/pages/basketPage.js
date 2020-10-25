const {browser, by, element} = require("protractor");
const Buttons = require("../helpers/buttons").default;
const Links = require("../helpers/links").default;
const Helpers = require("../helpers/helpers").default;
const {expect} = require("chai");

class BasketPage {
    constructor() {
        this.miniBasketCheckOutButton = element(by.css(`.button.mini-basket-drawer-checkout`));
        this.checkoutNowButton = element(by.css(`#coGuestButtonTop`));
        this.placeOrderButton = element(by.css(`#placeOrder`));
        this.payPalPayment = element(by.css(`#PrimaryPaymentType_PayPal`));
        this.creditCardPayment = element(by.css(`#PrimaryPaymentType_CreditCard`))
    }

    async checkoutSecurely () {
        await Links.clickLinkByElement(this.miniBasketCheckOutButton);
    }

    async checkoutNow() {
        await Buttons.clickButtonByElement(this.checkoutNowButton);
    }
}

exports.default = new BasketPage();
