import {test, expect} from '@playwright/test';
import CartPage from '../pages/cart.page';
import UploadComponent from '../Components/upload.component';
const path =require(`path`)

test.describe('Cart', () =>{
        let cartPage: CartPage;
        let uploadComponent: UploadComponent;
   
        test ("should upload a test file" , async({page})=>{
            cartPage = new CartPage(page);
            uploadComponent = new UploadComponent(page);

            //open url
            await page.goto('https://practice.sdetunicorns.com/cart/');

            //provide test file path
            const filePath =path.join(__dirname,'../data/Bild.png');


            //upload test file

            await page.setInputFiles('input#upfile_1',filePath)
            //click the submit button
            await cartPage.uploadBtn.click();

            //assertion

            await expect(cartPage.successText).toContainText('uploaded successfully')


        })

        test ("should upload a test file with a hidden input" , async({page})=>{

            cartPage = new CartPage(page);
            //open url
            await page.goto('https://practice.sdetunicorns.com/cart/');

            //provide test file path
            const filePath =path.join(__dirname,'../data/Bild.png');

            //DOM Manipulation
            await page.evaluate(() => {
                const selector = document.querySelector('input#upfile_1')
                if(selector){
                    selector.className ='';
                }
            })

            //upload test file
            await page.setInputFiles('input#upfile_1',filePath)
            //click the submit button
            await cartPage.uploadBtn.click();

            //assertion

            await expect(cartPage.successText).toContainText('uploaded successfully')


        })

        test ("should upload a test file with wait" , async({page})=>{

            cartPage = new CartPage(page);
            uploadComponent = new UploadComponent(page);
            //open url
            await page.goto('https://practice.sdetunicorns.com/cart');
        

            //provide test file path
            const filePath =path.join(__dirname,'../data/test.pdf');


            //upload test file
            uploadComponent.uploadFile(filePath)

            //WRONG WAT TO WAIT (HARD CODED WAIT)
           // await page.waitForTimeout(5000);

           //CONDITIONAL WAIT
           //await page.locator('#wfu_messageblock_header_1_label_1').waitFor({state: 'visible', timeout: 10000})

           //ASSERTION WAIT
            //assertion
            await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully',{timeout: 10000});


        })

    

})