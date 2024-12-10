import {test, expect} from '@playwright/test';
import ContactPage from '../pages/contact.page';
import FormComponent from '../Components/form.component'
import { faker } from '@faker-js/faker';


test.describe('Contact', () =>{

        let contactPage: ContactPage;
        let formComponent: FormComponent;
   
        test ("Verify Submit Button in Contact Page after Filling the Form" , async({page})=>{
            contactPage = new ContactPage(page)
            formComponent = new FormComponent(page);
            
            //go to homepage
            await page.goto('/');
            //go to contact page
            await contactPage.contactMenuButton.click();
            
            //fill the name field from FormComponent
            await formComponent.formFill(faker.person.fullName(), faker.internet.exampleEmail() ,faker.phone.number(),faker.lorem.paragraphs(2))
            //Click on Submit
            await contactPage.submitBtn.click();

            //----- Assert the submit ----
            console.log((await contactPage.succsessText.textContent())?.trim());
            await expect(contactPage.succsessText).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
        })


    

})