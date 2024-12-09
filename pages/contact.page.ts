import {Page,Locator} from '@playwright/test';

class ContactPage{
    page: Page;
    contactMenuButton: Locator;
    nameField: Locator;
    emailField: Locator;
    numberField: Locator;
    textBlock: Locator;
    submitBtn: Locator;
    succsessText: Locator;
    
    constructor(page: Page){
     this.page = page;
     this.contactMenuButton = page.locator('#menu-item-493')
     this.nameField = page.locator('#evf-277-field_ys0GeZISRs-1')
     this.emailField = page.locator('#evf-277-field_LbH5NxasXM-2')
     this.numberField = page.locator('#evf-277-field_66FR384cge-3')
     this.textBlock = page.locator('#evf-277-field_yhGx3FOwr2-4')
     this.submitBtn = page.locator('text=submit')
     this.succsessText = page.locator('div[role="alert"]')


      }
}

export default ContactPage;