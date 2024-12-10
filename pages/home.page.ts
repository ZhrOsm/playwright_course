import {Page,Locator} from '@playwright/test';

class HomePage{
    page: Page;
    getstartedButton: Locator;
    headingText: Locator;
    homeText: Locator;
    searchIcon: Locator;
    navLinks: Locator;
    aboutMenu: Locator;
    constructor(page: Page){
     this.page = page;
     this.getstartedButton = page
        .locator('#get-started')
     this.aboutMenu= page.locator('//li[@id="menu-item-491"]//a[text()="About"]')
     this.headingText = page.locator('text=Think different. Make different.')
     this.homeText = page.locator('#zak-primary-menu:has-text("Home")')
     this.searchIcon =page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']")
     this.navLinks = page.locator('#zak-primary-menu li[id*=menu]')
    }

    async navigate (){
        await this.page.goto('/');
    }
}

export default HomePage;