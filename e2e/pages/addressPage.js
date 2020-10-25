const {browser, by, element} = require("protractor");
const Expectations = require("../helpers/expectations").default;
const Button = require("../helpers/buttons").default;
const Input = require("../helpers/input").default;
const Links = require("../helpers/links").default;
const Helpers = require("../helpers/helpers").default;
const {expect} = require("chai");
const chai = require("chai");
chai.use(require("chai-string"));

class AddressPage {
    constructor() {
        this.editAddressButton = element(by.css(`#btnEditIcon`));
        this.postcodeField = element(by.id(`Postcode`));
        this.searchPostcodeButton = element(by.css(`.btn-outline-light`));
        this.dropdownAddress = element.all(by.css(`.dropdown-menu.show li`));
        this.continueButton = element(by.id(`btnAddAddress`));
        this.formattedAddress = element(by.css(`.formattedAddress`));
    }

    async goToEditAddressPage() {
        await Links.clickLinkByElement(this.editAddressButton);
    }

    async editAddressByPostcode(postcode) {
        await Helpers.scrollToElement(this.postcodeField);
        await Input.inputTextInField(this.postcodeField, postcode);
        await Button.clickButtonByElement(this.searchPostcodeButton);
        await Expectations.waitUntilIsClickable(this.dropdownAddress.get(2));
        await Button.clickButtonByElement(this.dropdownAddress.get(2));
        await Button.clickButtonByElement(this.continueButton);
    }

    async checkAddress() {
        await Expectations.waitUntilIsVisible(this.formattedAddress);
        expect(await this.formattedAddress.getText()).to.equalIgnoreSpaces(`Liverpool Football Club Plc Anfield Road LIVERPOOL L4 0TH`)
    }
}

exports.default = new AddressPage();
