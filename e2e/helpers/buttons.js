const {element, by} = require("protractor");
const Expectations = require("../helpers/expectations").default;

class Buttons {
    async returnButtonByName(buttonName) {
        return element(by.buttonText(buttonName))
    }

    async clickButtonByName(buttonName) {
        await Expectations.waitUntilIsClickable(this.returnButtonByName(buttonName));
        await this.returnButtonByName(buttonName).click();
    }

    async clickButtonByElement(webElement) {
        await Expectations.waitUntilIsVisible(webElement);
        await webElement.click();
    }

    async clickElementByJs(webElement) {
        await Expectations.waitUntilIsClickable(webElement);
        await browser.executeScript('argument[0].click()', webElement);
    }
}

exports.default = new Buttons();
