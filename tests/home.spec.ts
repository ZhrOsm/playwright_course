import {test, expect} from "@playwright/test";
import { log } from "console";
import { title } from "process";
import HomePage from "../pages/home.page";


test.describe('Home', () => {
    let homePage: HomePage;


    //beforeaech hook to open BASE-URL
    test.beforeEach(async({page}) => {
        homePage = new HomePage(page);
        await homePage.navigate()
    })



    test ("Open HomePage and verify Title" , async({page})=>{
          
        //Verify Title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
       
        
    })

    test ("Open AboutPage and verify Title" , async({page})=>{
        
        await homePage.aboutMenu.click()
        //Verify Title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
       
        
    })

    test ("Click get startedbutton using CSS Selector" , async({page})=>{
        
    
        //const getstartedButton = await page.locator('#get-started').click();
        await homePage.getstartedButton.click();
        


        //Verify URL
        await expect(page).toHaveURL('/#get-started');

        //URL in bir kelimeyi icerip icermedigi

        await expect(page).toHaveURL(/.*#get-started/);
       
        
    })

    test ("Verify Heading Text ist visible using the text selector" , async({page})=>{
        //find the text locater
        //const headingText = page.locator('text=Think different. Make different.');
        //verify heading text is visible
        log(await homePage.headingText.allTextContents());
        await expect(homePage.headingText).toBeVisible();
        
    })

    test ("Verify home link is enabled using text an css selector" , async({page})=>{
        
        //find the text locater
        //const homeText = page.locator('#zak-primary-menu >> text=Home');
        //Baska bir yol:
        //const homeText = page.locator('#zak-primary-menu:has-text("Home")');
        
        //verify heading text is visible
        await expect(homePage.homeText).toBeEnabled();
        
    })

    test ("Verify search icon is visible using xpath selector" , async({page})=>{
        
       
        // const searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");

        //verify heading text is visible
        await expect(homePage.searchIcon).toBeVisible();
        
    })

    test ("Verify the Text of all nav links", async({page})=>{
        
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        await homePage.navigate()
        //find the nav links

        //const navLinks = await page.locator('#zak-primary-menu li[id*=menu]');
        log(await homePage.navLinks.allTextContents());
        //arrays print out with loop
       for(const el of await homePage.navLinks.elementHandles()){
            console.log(await el.textContent())
        }
        expect(await homePage.navLinks.allTextContents()).toEqual(expectedLinks);
    })

    //nth() methode
    test ("Verify n. element with nth() methode", async({page})=>{
        
        const LinkNames = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        await homePage.navigate()
        //find the nav links

        const navyLinks = await page.locator('#zak-primary-menu li[id*=menu]').nth(3);
        log(await navyLinks.allTextContents());
        expect(await navyLinks.textContent()).toEqual(LinkNames[3]);
    })
/*
    test ("Verify Submit Button in Contact Page after Filling the Form" , async({page})=>{

        //go to homepage
        await page.goto('https://practice.sdetunicorns.com/');
        //go to contact page
        await page.locator('#menu-item-493').click();
        //fill the name field
        await page.locator('#evf-277-field_ys0GeZISRs-1').fill('name');
        //fill the Email field
        await page.locator('#evf-277-field_LbH5NxasXM-2').fill('email@gmail.com');
        //fill the Phone field
        await page.locator('#evf-277-field_66FR384cge-3').fill('123456789');
        //fill then Message
        await page.locator('#evf-277-field_yhGx3FOwr2-4').fill('thanks');
        //Click on Submit
        await page.locator('text=submit').click();
        //----- Assert the submit ----
        //locate the Text
        const succsessText = page.locator(".everest-forms-notice everest-forms-notice--success everest-forms-submission-scroll");
        log(await succsessText.allTextContents());
       // expect(succsessText.textContent()).toEqual('Thanks for contacting us! We will be in touch with you shortly');
    })

    test ("Verify recent post on the my account page", async({page})=>{
        const recentPosts = [
            "IFrame Sample",
            "Successful Marketing Ads for Your Business",
            "Let’s Building Your Business from Scratch",
            "The Best Place to Invest Your Money",
            "The Big Seminar for Your Right Investment",
        ];

        await page.goto('https://practice.sdetunicorns.com/');
        await page.locator('#zak-primary-menu >> text=My account').click();
        //find the nav links
         const recentPostsExpectedText = page.locator('.widget-title:has-text"Recent Posts"]');
    
        const navyLinks = await page.locator('#zak-primary-menu li[id*=menu]').nth(3);
        log(await navyLinks.allTextContents());
        expect(await navyLinks.textContent()).toEqual(recentPosts[3]);*/
    



   
})


