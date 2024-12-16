import {test, expect, APIRequestContext, APIResponse} from '@playwright/test';
import ContactPage from '../pages/contact.page';
import FormComponent from '../Components/form.component'



test.describe('Contact', () =>{

        let contactPage: ContactPage;
        let formComponent: FormComponent;
        let fakerApi: APIRequestContext;
        let randomPerson:APIResponse;

        test.beforeAll(async ({playwright}) =>{

            fakerApi = await playwright.request.newContext({
                baseURL: 'https://jsonplaceholder.typicode.com/'
            });

            const response = await fakerApi.get('users')
            const responseBody = await response.json();
            randomPerson = responseBody[0];
            

        })
   
        test ("Verify Submit Button in Contact Page after Filling the Form" , async({page})=>{
            contactPage = new ContactPage(page)
            formComponent = new FormComponent(page);
            
            //go to homepage
            await page.goto('/');
            //go to contact page
            await contactPage.contactMenuButton.click();
            
            //fill the name field from FormComponent
            await formComponent.formFill(
                randomPerson['name'], 
                randomPerson['email'] ,
                randomPerson['phone'],
                randomPerson['website'])
            //Click on Submit
            await contactPage.submitBtn.click();

            //----- Assert the submit ----
            console.log((await contactPage.succsessText.textContent())?.trim());
            await expect(contactPage.succsessText).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
        })


    

})