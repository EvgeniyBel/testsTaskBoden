const {browser, by, element} = require("protractor");
const Expectations = require("../helpers/expectations").default;
const Buttons = require("../helpers/buttons").default;
const Links = require("../helpers/links").default;
const Helpers = require("../helpers/helpers").default;
const Input = require("../helpers/input").default;

class SearchPage {
    constructor() {
        this.womenFilterButton = element(by.css(`#primaryFilter_departmentWomen`));
        this.returnFilterByName = (filter) => {
            return element(by.xpath(`//*[@id='productGridPrimaryFilterPortal']//span[contains(text(),'${filter}')]/ancestor::button`));
        };
        this.returnLinkByName = (filter) => {
            return element(by.xpath(`//*[@id='productGridPrimaryFilterPortal']//span[contains(text(),'${filter}')]/ancestor::li`));
        };
        this.searchResult = element(by.css(`.has-results-notification`));
        this.filterPortal = element(by.css(`#productGridPrimaryFilterPortal`));
        this.productGrid = element(by.id(`productGrid`));
    }

    async addSearchFilterByName(filter) {
        await browser.waitForAngularEnabled(false);
        await Expectations.waitUntilIsVisible(this.productGrid);
        await Expectations.waitUntilIsVisible(this.filterPortal);
        await Buttons.clickButtonByElement(this.returnLinkByName(filter));
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
