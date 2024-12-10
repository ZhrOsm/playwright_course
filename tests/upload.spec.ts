import {test, expect} from '@playwright/test';
const path =require(`path`)
import UploadPage from '../pages/upload.page';
import UploadComponent from '../Components/upload.component';



test.describe('Upload', () =>{
        let uploadPage: UploadPage;
        let uploadComponent: UploadComponent;

        const fileName = ['Bild.png','test.pdf']

        test.beforeEach(async({page})=> {
            uploadPage = new UploadPage(page);
            //open url
            await page.goto('/cart');


        })
        


        for(const name of fileName){

            test (`should upload a ${name} file` , async({page})=>{
                
                //provide test file path
                const filePath =path.join(__dirname,`../data/${name}`);
    
    
                //upload test file
    
                await page.setInputFiles('input#upfile_1',filePath)
                //click the submit button
                await uploadPage.uploadBtn.click();
    
                //assertion
    
                await expect(uploadPage.successText).toContainText('uploaded successfully')
    
    
            })
        }

        
        
   
    

        test ("should upload a test file with a hidden input" , async({page})=>{

            uploadPage = new UploadPage(page);
            //open url
            await page.goto('/cart');
            

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
            await page.setInputFiles('input#upfile_1', filePath)
            //click the submit button
            await uploadPage.uploadBtn.click();

            //assertion

            await expect(uploadPage.successText).toContainText('uploaded successfully')


        })

        test.skip ("should upload a test file with wait" , async({page})=>{

            uploadPage = new UploadPage(page);
            //open url
            await page.goto('/cart');
            uploadComponent = new UploadComponent(page);

            //provide test file path
            const filePath =path.join(__dirname,'../data/test.pdf');

            //upload test file

            uploadComponent.uploadFile(filePath);

            //WRONG WAT TO WAIT (HARD CODED WAIT)
           // await page.waitForTimeout(5000);

           //CONDITIONAL WAIT
           //await page.locator('#wfu_messageblock_header_1_label_1').waitFor({state: 'visible', timeout: 10000})

           //ASSERTION WAIT
            //assertion
            await expect(uploadPage.successText).toContainText('uploaded successfully',{timeout: 10000});


        })
        

    

})