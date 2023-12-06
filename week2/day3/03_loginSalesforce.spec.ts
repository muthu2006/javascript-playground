/*
Assignment - 1 (Login to Salesforce)

1) Open Salesforce Login Page https://login.salesforce.com
2) Enter the username
3) Enter the password
4) Click Login
5) Print the title and url

*/
import { test, chromium } from "@playwright/test";

test("Open SalesForce.com login page", async () => {
    const browserInstance = await chromium.launch({headless: false, channel: "chrome"});
    const browserContext = await browserInstance.newContext();
    const browserPage = await browserContext.newPage();
    await browserPage.goto("https://login.salesforce.com");
    await browserPage.fill("#username", "vmkrishnan91@gmail.com");
    await browserPage.fill("#password", "qwerty@123");
    await browserPage.click("#Login");
    await browserPage.waitForLoadState("load");
    console.log(`Page title is "${await browserPage.title()}"`);
    console.log(`Page URL is "${browserPage.url()}"`);
});