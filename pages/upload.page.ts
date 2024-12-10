import {Page,Locator} from '@playwright/test'

class UploadPage {
    page: Page;
    uploadBtn: Locator;
    successText: Locator;

    constructor(page: Page){
        this.page =page;
        this.uploadBtn = page.locator('#upload_1')
        this.successText = page.locator('#wfu_messageblock_header_1_label_1')

    }
}

export default UploadPage