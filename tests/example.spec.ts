import {test} from '@playwright/test';

test('Open chrome', async ({page})=>{
    await page.goto('https://www.google.com/'); 
});