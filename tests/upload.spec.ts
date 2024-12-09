import {test, expect} from '@playwright/test';
const path =require(`path`)
import UploadPage from '../pages/upload.page';

test.describe('Upload', () =>{
        let uploadPage: UploadPage;
   
        test ("should upload a test file" , async({page})=>{
            uploadPage = new UploadPage(page);

            //open url
            await page.goto('https://practice.sdetunicorns.com/cart/');

            //provide test file path
            const filePath =path.join(__dirname,'../data/Bild.png');


            //upload test file

            await page.setInputFiles('input#upfile_1',filePath)
            //click the submit button
            await uploadPage.uploadBtn.click();

            //assertion

            await expect(uploadPage.successText).toContainText('uploaded successfully')


        })

        test ("should upload a test file with a hidden input" , async({page})=>{

            uploadPage = new UploadPage(page);
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
            await uploadPage.uploadBtn.click();

            //assertion

            await expect(uploadPage.successText).toContainText('uploaded successfully')


        })

        test ("should upload a test file with wait" , async({page})=>{

            //open url
            await page.goto('https://practice.sdetunicorns.com/cart/');

            //provide test file path
            const filePath =path.join(__dirname,'../data/test.pdf');


            //upload test file

            await page.setInputFiles('input#upfile_1',filePath)
            //click the submit button
            await page.locator('#upload_1').click();

            //WRONG WAT TO WAIT (HARD CODED WAIT)
           // await page.waitForTimeout(5000);

           //CONDITIONAL WAIT
           //await page.locator('#wfu_messageblock_header_1_label_1').waitFor({state: 'visible', timeout: 10000})

           //ASSERTION WAIT
            //assertion
            await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully',{timeout: 10000});


        })

    

})