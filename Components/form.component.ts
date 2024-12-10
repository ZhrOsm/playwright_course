import {Page, Locator} from '@playwright/test'
import ContactPage from '../pages/contact.page';

let contactPage: ContactPage;

class FormComponent{
    page:Page;
    constructor(page:Page){
        this.page = page;
    }

    formComponent(){
        return new FormComponent(this.page);
    }

    async formFill(name:String, email: string, number: string, text: string){
        contactPage = new ContactPage(this.page);
        await contactPage.nameField.fill(this.formFill.name);
            //fill the Email field
        await contactPage.emailField.fill(email);
            //fill the Phone field
        await contactPage.numberField.fill(number);
            //fill the Message field
        await contactPage.textBlock.fill(text);



    }

}
export default FormComponent