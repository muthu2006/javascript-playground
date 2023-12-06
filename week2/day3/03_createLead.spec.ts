/*
Assignment - 2 (Create a new Lead)

1) Open http://leaftaps.com/opentaps/control/main
2) Perform the following functions

    a) Login (Enter username, password, Click Login)
    b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
       await page.locator("text=CRM/SFA').click();
    c) Click the Leads Link (See the Tab)
    d) Click Create Lead Link (See Left Menu)
    e) Enter the company name, first name and last name (use id and pur your own data)
    f) Click Create Lead Button 

*/

import { chromium, test } from "@playwright/test";

test("Create a new Lead", async () => {
    const browserInstance = await chromium.launch({headless: false, channel: "msedge"});
    const browserContext = await browserInstance.newContext();
    const browserPage = await browserContext.newPage();
    await browserPage.goto("http://leaftaps.com/opentaps/control/main");
    await browserPage.fill("#username","Demosalesmanager");
    await browserPage.fill("#password","crmsfa");
    await browserPage.click(".decorativeSubmit");
    await browserPage.locator("text=CRM/SFA").click();
    await browserPage.locator("a:has-text('Leads')").click();
    await browserPage.locator("a:has-text('Create Lead')").click();
    await browserPage.waitForLoadState("load");
    await browserPage.fill("#createLeadForm_companyName","Applause");  
    await browserPage.fill("#createLeadForm_firstName", "Muthu");
    await browserPage.fill("#createLeadForm_lastName","Krishnan");
    await browserPage.locator(".smallSubmit").click();
});