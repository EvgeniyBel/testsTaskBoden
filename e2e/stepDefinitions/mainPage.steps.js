let {Given, When, Then, Before, AfterAll, After} = require('cucumber');
const MainPage = require("../pages/mainPage").default;
const Helpers = require("../helpers/helpers").default;

Given(/^Go to applications (.*)$/, {timeout: 60000}, async function (url) {
        await MainPage.goToMainPage(url);
});

Given(/^Go to (.*) menu item (.*) section$/, {timeout: 30000}, async function(menuItem, menuSubItem) {
        await MainPage.goStoreSection(menuItem, menuSubItem);
});

When(/^I search (.*)$/, {timeout:30000}, async function(name) {
        await MainPage.searchItem(name);
});

AfterAll({ tags: '@clearCache', timeout: 30000 }, async function() {
        await Helpers.clearCookiesAndCache();
});

After({ tags: '@singOut', timeout: 30000 }, async function() {
        await MainPage.signOut();
});

Given(/^Go to address book page$/, {timeout: 45000}, async function() {
        await MainPage.goToAddressPage();
});

Given(/^I accept cookies$/, {timeout: 90000}, async function() {
        await MainPage.acceptCookies();
});





