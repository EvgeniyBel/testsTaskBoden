const {browser, element, by} = require("protractor");
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
        try{
            await Expectations.waitUntilIsVisible(webElement);
            await webElement.click();
        } catch (e) {
            await Expectations.waitUntilIsVisible(webElement);
            await this.clickElementByJs(webElement);
        }

    }

    async clickElementByJs(webElement) {
        await Expectations.waitUntilIsVisible(webElement);
        await browser.executeScript('arguments[0].click()', webElement);
    }
}

exports.default = new Buttons();
