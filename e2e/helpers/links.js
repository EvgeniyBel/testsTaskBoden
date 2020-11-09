const {by, element} = require("protractor");
const Expectations = require("../helpers/expectations").default;

class Links {
    async returnLinkByName(linkName) {
        return element(by.linkText(linkName));
    }

    async clickLinkByName(linkName) {
        await Expectations.waitUntilIsVisible(await this.returnLinkByName(linkName));
        await this.returnLinkByName(linkName).click();
    }

    async clickLinkByElement(webElement) {
        await Expectations.waitUntilIsVisible(webElement);
        await webElement.click();
    }
}

exports.default = new Links();
