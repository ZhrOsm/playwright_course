import {Page, Locator} from '@playwright/test'
class BlogPage{
    page: Page;
    recentPostList: Locator;

    constructor(page: Page){
        this.page = page;
        this.recentPostList =  page.locator('#recent-posts-3 ul li')

    }
}

export default BlogPage;