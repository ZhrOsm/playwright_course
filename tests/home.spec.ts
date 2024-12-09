import {test, expect} from "@playwright/test";
import { log } from "console";
import { title } from "process";

test.describe('Home', () => {
    test ("Open HomePage and verify Title" , async({page})=>{
        //open URL
        await page.goto('https://practice.sdetunicorns.com/');
        //Verify Title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
       
        
    })

    test ("Open AboutPage and verify Title" , async({page})=>{
        //open URL
        await page.goto('https://practice.sdetunicorns.com/about/');
        //Verify Title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
       
        
    })

    test ("Click get startedbutton using CSS Selector" , async({page})=>{
        //open URL
        await page.goto('https://practice.sdetunicorns.com/');
        //click to button
        await page.locator('#get-started').click();


        //Verify URL
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');

        //URL in bir kelimeyi icerip icermedigi

        await expect(page).toHaveURL(/.*#get-started/);
       
        
    })

    test ("Verify Heading Text ist visible using the text selector" , async({page})=>{
        //open URL
        await page.goto('https://practice.sdetunicorns.com/');
        //find the text locater
        const headingText = page.locator('text=Think different. Make different.');
        //verify heading text is visible
        await expect(headingText).toBeVisible();
        
    })

    test ("Verify home link is enabled using text an css selector" , async({page})=>{
        //open URL
        await page.goto('https://practice.sdetunicorns.com/');
        //find the text locater
        //const homeText = page.locator('#zak-primary-menu >> text=Home');
        //Baska bir yol:
        const homeText = page.locator('#zak-primary-menu:has-text("Home")');

        //verify heading text is visible
        await expect(homeText).toBeEnabled();
        
    })

    test ("Verify search icon is visible using xpath selector" , async({page})=>{
        //open URL
        await page.goto('https://practice.sdetunicorns.com/');
        //find the  locater
       
        const searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");

        //verify heading text is visible
        await expect(searchIcon).toBeVisible();
        
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

        await page.goto('https://practice.sdetunicorns.com/');
        //find the nav links

        const navLinks = await page.locator('#zak-primary-menu li[id*=menu]');
        log(await navLinks.allTextContents());
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    })
/*
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

        await page.goto('https://practice.sdetunicorns.com/');
        //find the nav links

        const navyLinks = await page.locator('#zak-primary-menu li[id*=menu]').nth(3);
        log(await navyLinks.allTextContents());
        expect(await navyLinks.textContent()).toEqual(LinkNames[3]);
    })
   */ 
})


