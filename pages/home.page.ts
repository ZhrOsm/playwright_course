import {Page,Locator} from '@playwright/test';

class HomePage{
    page: Page;
    getstartedButton: Locator;
    headingText: Locator;
    homeText: Locator;
    searchIcon: Locator;
    navLinks: Locator;
    constructor(page: Page){
     this.page = page;
     this.getstartedButton = page
        .locator('#get-started')
     this.headingText = page.locator('text=Think different. Make different.')
     this.homeText = page.locator('#zak-primary-menu:has-text("Home")')
     this.searchIcon =page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']")
     this.navLinks = page.locator('#zak-primary-menu li[id*=menu]')
    }

    async navigate (){
        await this.page.goto('https://practice.sdetunicorns.com/');
    }
}

export default HomePage;