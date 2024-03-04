import {test , chromium} from "@playwright/test"
import { url } from "inspector";

test("Day 4 Assignment Create Lead", async()=>
{
    const driverBrowser = await chromium.launch({channel:"chrome", headless:false});
    const Browserincogni = await driverBrowser.newContext();
    const page = await Browserincogni.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    console.log(await page.url);

/*
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

await page.waitForTimeout(3000);
// Enter the credentials -as demoSalesManager crmsfa
// Click on Login


await page.locator("#username").fill("demoSalesManager");
await page.locator("#password").fill("crmsfa");
await page.click("//input[@class='decorativeSubmit']");
console.log(await page.title());

// Click on crmsfa
await page.click("//a[contains(text(),'CRM/SFA')]");
await page.waitForTimeout(3000);
// Click on Leads
await page.click("//a[text()='Leads']");
// Click on CreateLead
await page.click("//a[text()='Create Lead']");

// Enter Company name 
// Enter First name
// Enter last name
let companyname ="TestLeaf2024";
let firstname ="Playwright";
let lastname ="Playwright";
await page.locator("#createLeadForm_companyName").fill(companyname);
await page.locator("#createLeadForm_firstName").fill(firstname);
await page.locator("#createLeadForm_lastName").fill(lastname);
// Click Create Lead button
await page.click("//input[contains(@value,'Create Lead')]");
// Print the page title
await page.waitForTimeout(3000);
console.log(await page.title());
await page.click("//a[text()='Edit']");
let updatecompany ="Playwright2024";
await page.locator("#updateLeadForm_companyName").fill(updatecompany);
await page.click("//input[@value='Update']");
console.log(await page.locator("#viewLead_companyName_sp").textContent());
})


