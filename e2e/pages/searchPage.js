const {browser, by, element} = require("protractor");
const Expectations = require("../helpers/expectations").default;
const Buttons = require("../helpers/buttons").default;
const Links = require("../helpers/links").default;
const Helpers = require("../helpers/helpers").default;
const Input = require("../helpers/input").default;

class SearchPage {
    constructor() {
        this.womenFilterButton = element(by.css(`#primaryFilter_departmentWomen`));
        this.returnFilterByName = async (filter) => {
            return element(by.xpath(`//*[@id='productGridPrimaryFilterPortal']//span[contains(text(),'${filter}')]/ancestor::button`));
        };
        this.searchResult = element(by.css(`.has-results-notification`));
    }

    async addFilterByName(filter) {
        await browser.waitForAngularEnabled(false);
        await Expectations.waitUntilIsVisible(await this.returnFilterByName(filter));
        await Buttons.clickButtonByElement(await this.returnFilterByName(filter));
    }

    async addFilterWomen() {
        await browser.waitForAngularEnabled(false);
        await Buttons.clickButtonByElement(this.womenFilterButton);
    }

    async returnSearchResultString(searchRequest) {
        await browser.waitForAngularEnabled(false);
        return `Search results for "${searchRequest}"`
    }
}

exports.default = new SearchPage();
