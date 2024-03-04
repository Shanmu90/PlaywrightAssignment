 
 /* Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * Enter the username vidyar@testleaf.com
 * Enter the password Testleaf@1234
 * Click Login button
 * Verify the title of the page (using page.title() method)
 * 
 */// Try Implementing Fixtures in the above testcase 
import {test, chromium} from "@playwright/test"

test("To Create Leads" , async()=>
    {
        const driverBrowser = await chromium.launch({channel:
            "chrome" });
        const driverIncognito = await driverBrowser.newContext();
        const page = await driverIncognito.newPage();
        await page.goto("https://login.salesforce.com/");
        console.log(await page.url);

       
        await page.waitForTimeout(3000);
        await page.locator("#username").fill("vidgar@testleaf.com");
        await page.locator("#password").fill("Testleaf@1234");
        await page.locator("#Login").click();
        console.log(await page.title());

    }
)