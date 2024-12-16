import {test, expect, APIRequestContext, APIResponse} from '@playwright/test';
import ContactPage from '../pages/contact.page';
import FormComponent from '../Components/form.component'
import apiController from '../controller/api.controller';


test.describe('Contact', () =>{

        let contactPage: ContactPage;
        let formComponent: FormComponent;
       // let fakerApi: APIRequestContext;
        let randomPerson:APIResponse;

        test.beforeAll(async ({playwright}) =>{

            // fakerApi = await playwright.request.newContext({
            //     baseURL: 'https://jsonplaceholder.typicode.com/'
            // });

            //const response = await fakerApi.get('users')
            // const responseBody = await response.json();
            // randomPerson = responseBody[0];

            await apiController.init();

            randomPerson = await apiController.getUser();


            

            // const postResponse = await fakerApi
            // .post('/users/1/todos',{
            //     data:{
            //         "title": "Learn Playwright",
            //         "completed": "false"
            //     }
            // })
            
            // const postResponseBody = await postResponse.json()
            // console.log(postResponseBody);


            const newUserTodo = await apiController.createUserTodo();
            console.log(newUserTodo)

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