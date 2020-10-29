const {browser, by, element} = require("protractor");
const Expectations = require("../helpers/expectations").default;
const Button = require("../helpers/buttons").default;
const Input = require("../helpers/input").default;

class SignInPage {
    constructor() {
        this.passwordField = element(by.css(`#password`));
        this.userNameFields = element(by.css(`#email`));
        this.logInButton = element(by.css(`#login`))
    }

    async logIn(username, password) {
        await browser.waitForAngularEnabled(false);
        await Expectations.waitUntilIsVisible(this.passwordField);
        await Input.inputTextInField(this.userNameFields, username);
        await Input.inputTextInField(this.passwordField, password);
        await Button.clickButtonByElement(this.logInButton);
    }
}
exports.default = new SignInPage();
