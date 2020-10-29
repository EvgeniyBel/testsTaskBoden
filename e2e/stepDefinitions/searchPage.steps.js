let {Given, When, Then} = require('cucumber');
const SearchPage = require('../pages/searchPage').default;
const {expect} = require("chai");

When(/^I add filter (.*)$/, {timeout: 45000}, async function(filter) {
    await SearchPage.addFilterByName(filter);
});

Then(/^Filter (.*) is not active$/,{timeout: 30000}, async function(filter) {
    const button = await SearchPage.returnFilterByName(filter);
    await expect(await button.getAttribute('aria-pressed')).to.equal('false')
});

Then(/^Filter (.*) is active$/,{timeout: 30000}, async function(filter) {
    const button = await SearchPage.returnFilterByName(filter);
    await expect(await button.getAttribute('aria-pressed')).to.equal('true')
});

Then(/^Field search result is equal (.*)$/, {timeout: 30000}, async function(searchQuery) {
    await expect(await SearchPage.searchResult.getText()).to.equal(await SearchPage.returnSearchResultString(searchQuery));
});
