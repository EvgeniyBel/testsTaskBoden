let {Given, When, Then, Before, After} = require('cucumber');
const MainPage = require("../pages/mainPage").default;
const Helpers = require("../helpers/helpers").default;
const StorePage = require("../pages/storePage").default;

Given(/^I add item to basket$/, {timeout: 60000}, async function() {
     await StorePage.selectFirstItemToBasket();
});

When(/^I set the value to (.*) for the filter (.*)$/, {timeout: 60000}, async function(filter, filterName) {
     await StorePage.addFilterByName(filterName, filter);
});

Then(/^I see that there is (.*) filter in (.*)$/, {timeout: 30000}, async function(filterNumber, filterName) {
     await StorePage.checkFilter(filterName, filterNumber);
});
