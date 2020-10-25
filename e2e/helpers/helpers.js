const {browser, protractor} = require("protractor");
const Expectations = require("../helpers/expectations").default;

class Helpers {
    async mouseHoverOnElement(webElement) {
        await Expectations.waitUntilIsVisible(webElement);
        await browser.actions().mouseMove(webElement).perform();
    }

    async scrollToElement(webElement) {
        await Expectations.waitUntilIsVisible(webElement);
        await browser.executeScript(`arguments[0].scrollIntoView(true)`, webElement);
    }

    async pressEnter() {
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    async clearCookiesAndCache() {
        await browser.driver.manage().deleteAllCookies();
        await browser.executeScript('window.sessionStorage.clear();');
        await browser.executeScript('window.localStorage.clear();');
    }
}
exports.default = new Helpers();
