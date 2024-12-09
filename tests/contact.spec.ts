import {test, expect} from '@playwright/test';
import ContactPage from '../pages/contact.page';

test.describe('Contact', () =>{

        let contactPage: ContactPage;
   
        test ("Verify Submit Button in Contact Page after Filling the Form" , async({page})=>{
            contactPage = new ContactPage(page)

            //go to homepage
            await page.goto('https://practice.sdetunicorns.com/');
            //go to contact page
            await contactPage.contactMenuButton.click();
            //fill the name field
            await contactPage.nameField.fill('name');
            //fill the Email field
            await contactPage.emailField.fill('email@gmail.com');
            //fill the Phone field
            await contactPage.numberField.fill('123456789');
            //fill the Message field
            await contactPage.textBlock.fill('thanks');
            //Click on Submit
            await contactPage.submitBtn.click();
            //----- Assert the submit ----
            //locate the Text
            
            console.log(await contactPage.succsessText.textContent());
            await expect(contactPage.succsessText).toHaveText('\n\t\tThanks for contacting us! We will be in touch with you shortly\t');
        })


    

})