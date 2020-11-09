const Expectations = require("../helpers/expectations").default;

class Input {
    async inputTextInField (webElement, sendText) {
        await Expectations.waitUntilIsVisible(webElement);
        await webElement.clear();
        await webElement.sendKeys(sendText);
    }
}

exports.default = new Input();
