import {test , chromium} from "@playwright/test"
import { url } from "inspector";

test("Day 4 Assignment Create Lead", async()=>
{
    const driverBrowser = await chromium.launch({channel:"chrome", headless:true});
    const Browserincogni = await driverBrowser.newContext();
    const page = await Browserincogni.newPage();
    await page.goto("https://login.salesforce.com");
    console.log(await page.url);

    // Assignment: 1 Create Lead
// 1. Login to https://login.salesforce.com


await page.waitForTimeout(3000);
await page.locator("#username").fill("vidyar@testleaf.com");
await page.locator("#password").fill("Force@123");
await page.locator("#Login").click();
console.log(await page.title());

// 2. Click on toggle menu button from the left corner
// 3. Click view All and click Sales from App Launcher
// 4. Click on Leads tab 
// 5. Click on New button
// 6. Select Salutation dropdown
// 7. Enter the Last Name
// 8. Enter the CompanyName 
// 9. Click Save and Verify Leads name created
await page.waitForTimeout(5000);
await page.click("//div[@class='slds-icon-waffle']");
await page.click("//button[@aria-label='View All Applications']");
await page.waitForLoadState('load');
await page.click("//p[text()='Sales']");
await page.waitForTimeout(10000);
console.log("New Lead creation");
await page.click("//span[text()='Leads' and @class='slds-truncate']");
await page.waitForTimeout(2000);
await page.click("//div[@title='New']");
await page.waitForTimeout(2000);
console.log("New Lead creation");
await page.click("//button[@name='salutation']");
await page.click("//*[text()='Mr.']");
let leadname = "Perumal";
await page.locator("//input[@name='lastName']").fill(leadname);
await page.locator("//input[@name='Company']").fill("Playwright Learn");
await page.click("//button[@name='SaveEdit']");
console.log("New Lead created");
await page.waitForTimeout(2000);
console.log(await page.locator("//*[@slot='primaryField']").innerText());

}

)
test("Day 4 Create Individuals ", async()=>
{
    const driverBrowser = await chromium.launch({channel:"chrome", headless:false});
    const Browserincogni = await driverBrowser.newContext();
    const page = await Browserincogni.newPage();
    await page.goto("https://login.salesforce.com");
    console.log(await page.url);


await page.waitForTimeout(3000);
await page.locator("#username").fill("vidyar@testleaf.com");
await page.locator("#password").fill("Force@123");
await page.locator("#Login").click();
console.log(await page.title());

// Assignment: 3 Create Individuals
// Test Steps: 
// 1. Login to https://login.salesforce.com
// 2. Click on the toggle menu button from the left corner
// 3. Click View All and click Individuals from App Launcher

await page.waitForTimeout(5000);
await page.click("//div[@class='slds-icon-waffle']");
await page.click("//button[@aria-label='View All Applications']");
await page.waitForLoadState('load');
await page.click("//p[text()='Individuals']");
await page.waitForTimeout(10000);
// 4. Click on the Dropdown icon in the Individuals tab
// 5. Click on New Individual
console.log("New Individual");
await page.click("(//span[contains(text(),'Individuals') and @class='slds-truncate']/following::span)[1]");
await page.waitForTimeout(3000);
await page.click("//span[text()='New Individual']");
// 6. Enter the Last Name
// 7. Click save and verify Individuals Name
await page.locator("//input[@placeholder='Last Name']").fill("Playwright Learn");
await page.waitForTimeout(3000);
await page.click("(//span[text()='Save'])[2]");
await page.waitForLoadState('load');
console.log(await page.locator("//span[@class='uiOutputText']").innerText());
})

// Assignment: 4 Edit Individuals
// Test Steps:
// 1. Login to https://login.salesforce.com
// 2. Click on the toggle menu button from the left corner
// 3. Click View All and click Individuals from App Launcher 
// 4. Click on the Individuals tab 
test("Day 4 Edit Individuals ", async()=>
{
    const driverBrowser = await chromium.launch({channel:"chrome", headless:false});
    const Browserincogni = await driverBrowser.newContext();
    const page = await Browserincogni.newPage();
    await page.goto("https://login.salesforce.com");
    console.log(await page.url);


await page.waitForTimeout(3000);
await page.locator("#username").fill("vidyar@testleaf.com");
await page.locator("#password").fill("Force@123");
await page.locator("#Login").click();
console.log(await page.title());

// Assignment: 3 Create Individuals
// Test Steps: 
// 1. Login to https://login.salesforce.com
// 2. Click on the toggle menu button from the left corner
// 3. Click View All and click Individuals from App Launcher

await page.waitForTimeout(5000);
await page.click("//div[@class='slds-icon-waffle']");
await page.click("//button[@aria-label='View All Applications']");
await page.waitForLoadState('load');
await page.click("//p[text()='Individuals']");
await page.waitForTimeout(10000);
// 4. Click on the Dropdown icon in the Individuals tab
// 5. Click on New Individual
console.log("Edit Individual");
await page.click("(//span[contains(text(),'Individuals')])[1]");
await page.waitForLoadState('load');
await page.locator("//input[@name='Individual-search-input']").fill("Playwright Learn");
await page.waitForTimeout(2000);
await page.keyboard.press('Enter');
// 5. Search the Individuals last name
// 6. Click on the Dropdown icon and Select Edit
await page.click("(//span[text()='Show Actions'])[1]");
await page.click("//a[@title='Edit']");
// 7. Select Salutation as 'Mr'
// 8. Now enter the first name
// 9. Click on Save and Verify the first name 
await page.click("//a[@class='select']");
await page.click("//*[text()='Mr.']");
let leadname = "Perumal";
await page.locator("//input[@placeholder='First Name']").fill(leadname);
await page.waitForTimeout(3000);
await page.click("(//span[text()='Save'])[2]");
await page.waitForLoadState('load');
console.log(await page.locator("(//a[@data-refid='recordId'])[1]").textContent());

})


