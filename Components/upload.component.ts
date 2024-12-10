import {Page} from '@playwright/test'
import CartPage from '../pages/cart.page';

let cartPage: CartPage;

class UploadComponent{

    
    page:Page;
    constructor(page:Page){
        this.page = page;
    }

    uploadComponent(){
        return new UploadComponent(this.page);
    }

    async uploadFile(filePath:string){
        cartPage = new CartPage(this.page);

        await this.page.setInputFiles('input#upfile_1',filePath)
            //click the submit button
        await cartPage.uploadBtn.click();
    }
    

}

export default UploadComponent