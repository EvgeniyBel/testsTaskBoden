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
        this.searchResult = element(by.css(`.has-results-notification`));
    }

    async addFilterByName(filter) {
        await Buttons.clickButtonByElement(this.returnFilterByName(filter));
    }

    async returnSearchResultString(searchRequest) {
        return `Search results for "${searchRequest}"`
    }
}

exports.default = new SearchPage();
