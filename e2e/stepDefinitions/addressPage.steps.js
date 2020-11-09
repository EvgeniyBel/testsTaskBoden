let {Given, When, Then, Before, After} = require('cucumber');
const AddressPage = require("../pages/addressPage").default;


Given(/^Go to edit Address Page$/, {timeout: 45000}, async function() {
   await AddressPage.goToEditAddressPage();
});

When(/^I change the address by postcode$/, {timeout: 120000}, async function() {
   await AddressPage.editAddressByPostcode('L4 0TH');
});

After({ tags: '@editAddress', timeout: 120000 }, async function() {
   await AddressPage.goToEditAddressPage();
   await AddressPage.editAddressByPostcode('LS1 4DY');
});

Then(/^I see a changed address$/, {timeOut: 30000}, async function() {
   await AddressPage.checkAddress();
});
