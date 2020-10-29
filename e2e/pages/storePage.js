const {browser, by, element} = require("protractor");
const Buttons = require("../helpers/buttons").default;
const Links = require("../helpers/links").default;
const Helpers = require("../helpers/helpers").default;
const Expectations = require("../helpers/expectations").default;
const {expect} = require("chai");


class StorePage {
    constructor() {
        this.storeItems = element.all(by.css(`.product-item-image.lazyloaded`));
        this.quickBuyButton = element.all(by.css(`.quick-buy-open-button`));
        this.productItemLinks = element.all(by.css(`a.product-item-link`));
        this.selectSizeButtons = element.all(by.css(`.product-option-button[aria-disabled='false']`));
        this.addToBagButton = element(by.css(`.productAddToBagButton-button`));
        this.price = element(by.css(`.productPrice-no-modificators`));
        this.totalPriceInBasket = element(by.css(`.toggle-button-mini-basket .toggleButton-label`));
        this.miniBasketButton = element(by.css(`button[aria-label='Mini Basket Toggle Button']`));
        this.returnFilterTypeByName = (filterName) => {
            return element(by.xpath(`//*[@class='product-grid-filter-item-toggle-button-label' and text()='${filterName}']/ancestor::button`))
        };
        this.returnFilterByName = (filter) => {
            return element(by.xpath(`//*[@class='product-option-value' and contains(text(),'${filter}')]/ancestor::button`))
        };
        this.fitButton = (fit) => {
            return element(by.xpath(`//*[text()='${fit}']/ancestor::button`))
        }
     }

    async selectFirstItemToBasket() {
        await browser.waitForAngularEnabled(false);
        await Helpers.scrollToElement(this.storeItems.get(0));
        await Links.clickLinkByElement(this.productItemLinks.get(0));
        await Expectations.waitUntilIsVisible(this.selectSizeButtons.get(0));
        if(await this.fitButton('Petite').isPresent()) {
            await Buttons.clickButtonByElement(await this.fitButton('Petite'));
            await Buttons.clickButtonByElement(this.selectSizeButtons.get(3));
        } else {
            await Buttons.clickButtonByElement(this.selectSizeButtons.get(0));
        }
        await Helpers.scrollToElement(this.addToBagButton);
        await Expectations.waitUntilIsClickable(this.addToBagButton);
        await Buttons.clickButtonByElement(this.addToBagButton);
    }

    async openMiniBasket() {
        await browser.waitForAngularEnabled(false);
        await Buttons.clickButtonByElement(this.miniBasketButton);
    }

    async addFilterByName(filterName, filter) {
        await browser.waitForAngularEnabled(false);
        await Helpers.scrollToElement(await this.returnFilterTypeByName(filterName));
        await Buttons.clickButtonByElement(await this.returnFilterTypeByName(filterName));
        await browser.sleep(1000);
        await Buttons.clickButtonByElement(await this.returnFilterByName(filter));
    }

    async checkFilter(filterName, filterNumber) {
        await browser.waitForAngularEnabled(false);
        expect(await this.returnFilterTypeByName(filterName).getText()).to.contains(`(${filterNumber})`);
    }
}

exports.default = new StorePage();
