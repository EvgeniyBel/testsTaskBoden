const {browser, protractor} = require("protractor");
const timeouts = require("../constants");

const ec = protractor.ExpectedConditions;
class Expectations {
    async waitUntilIsVisible(locator) {
        return browser.wait(ec.visibilityOf(locator)
            , timeouts.maxTimeout, `Element ${locator} is not visible after ${timeouts.maxTimeout}`);
    }

    async waitUntilIsNotVisible(locator) {
        return browser.wait(ec.invisibilityOf(locator)
            , timeouts.maxTimeout, `Element ${locator} is visible after ${timeouts.maxTimeout}`);
    }

    async waitUntilInDom(locator) {
        return browser.wait(ec.presenceOf(locator)
            , timeouts.maxTimeout, `Element ${locator} is not in dom after ${timeouts.maxTimeout}`);
    }

    async waitUntilNotInDom(locator) {
        return browser.wait(ec.stalenessOf(locator)
            , timeouts.maxTimeout, `Element ${locator} in dom after ${timeouts.maxTimeout}`);
    }

    async waitUntilIsClickable(locator) {
        return browser.wait(ec.elementToBeClickable(locator)
            , timeouts.maxTimeout, `Element ${locator} is not clickable after ${timeouts.maxTimeout}`);
    }

    async waitUntilHasText(locator, text) {
        return browser.wait(ec.textToBePresentInElement(locator, text)
            , timeouts.maxTimeout, `Element ${locator} not have ${text} after ${timeouts.maxTimeout}`);
    }
}

exports.default =  new Expectations();
