const {browser, by, element} = require("protractor");
const Expectations = require("../helpers/expectations").default;
const Buttons = require("../helpers/buttons").default;
const Links = require("../helpers/links").default;
const Helpers = require("../helpers/helpers").default;
const Input = require("../helpers/input").default;

class MainPage {
    constructor() {
        this.signInButton = element(by.css(`.reference-sign-in button[aria-label="Sign in or register"]`));
        this.dropDownButtons = element.all(by.css(`.nav-user-info.even li.nav-item`));
        this.dropDownAfterLogIn = element.all(by.css(`.nav-user-info.odd li.nav-item`));
        this.returnNavItemByName = (menuItem) => {
            return element(by.xpath(`//*[text() = '${menuItem}']/ancestor::li`))
        };
        this.returnMenuItemByName = (menuItem, menuSubItem) => {
            return element.all(by.xpath(`//*[text() = '${menuItem}']/ancestor::li//a[text() = '${menuSubItem}']`)).first()
        };
        this.searchButton = element(by.css(`.toggle-button-search-panel button`));
        this.searchField = element(by.css(`#searchInput`));
        this.acceptCookiesButton = element(by.css(`button#onetrust-accept-btn-handler`));
    }

    async goToMainPage(url) {
        await browser.waitForAngularEnabled(false);
        await browser.get(url);
        await Expectations.waitUntilIsVisible(this.signInButton);
    }

    async goToSignInPage() {
        await browser.waitForAngularEnabled(false);
        await Buttons.clickButtonByElement(this.signInButton);
        await Links.clickLinkByElement(this.dropDownButtons.get(0));
    }

    async goToAddressPage() {
        await browser.waitForAngularEnabled(false);
        await Buttons.clickButtonByElement(this.signInButton);
        await Links.clickLinkByElement(this.dropDownAfterLogIn.get(1))
    }

    async goStoreSection(menuItem, menuSubItem) {
        await browser.waitForAngularEnabled(false);
        await Helpers.mouseHoverOnElement(await this.returnNavItemByName(menuItem));
        await Links.clickLinkByElement(await this.returnMenuItemByName(menuItem, menuSubItem));
    }

    async searchItem(name) {
        await browser.waitForAngularEnabled(false);
        await Buttons.clickButtonByElement(this.searchButton);
        await Input.inputTextInField(this.searchField, name);
        await Helpers.pressEnter();
    }

    async signOut() {
        await browser.waitForAngularEnabled(false);
        await this.goToMainPage('https://boden.co.uk/');
        await Buttons.clickButtonByElement(this.signInButton);
        await Links.clickLinkByElement(this.dropDownAfterLogIn.get(3))
    }

    async acceptCookies() {
        await Expectations.waitUntilIsClickable(this.acceptCookiesButton);
        await Buttons.clickButtonByElement(this.acceptCookiesButton);
    }
}
exports.default = new MainPage();
