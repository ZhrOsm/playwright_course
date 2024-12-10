import {test, expect} from '@playwright/test';
import BlogPage
 from '../pages/blog.page';
test.describe('Blog', () =>{
        let blogPage: BlogPage; 
   
        test ("Verify Recent Posts count and verify the lenght of each list item" , async({page})=>{
            blogPage = new BlogPage(page);

            //go to blog page
            await page.goto('/blog');
            

            //get the recent post list elements(on blog.page.ts)
            
            //loop through the list and assert the char lenght > 10
            for (const el of await blogPage.recentPostList.elementHandles()) {
               console.log((await el.textContent())?.trim());
                expect(((await el.textContent())?.trim())?.length).toBeGreaterThan(10)
            }

            // assert the total lenght = 5
            expect(await blogPage.recentPostList.count()).toEqual(5);



        })


    

})