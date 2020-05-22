import { Given, When, Then } from 'cucumber';
import router from '../support/router';
import googlePage from '../pageObjects/google';
const assert = require('assert');


Given(/^a user navigates to google$/, function () {
	router.open('');
});

When(/^searches for wikipedia$/, function () {
	googlePage.search();
});

Then(/^user get results$/, function () {
	assert.ok(googlePage.checkResults(), 'The user should get the wikipedia results');
	browser.takeScreenshot();
});
