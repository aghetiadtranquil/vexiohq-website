const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Capture console messages
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  await page.goto('http://localhost:3002/portal/login/', { waitUntil: 'networkidle0' });
  
  // Check if page loaded
  const title = await page.title();
  console.log('Page title:', title);
  
  // Check for form elements
  const emailInput = await page.$('#email');
  const passwordInput = await page.$('#password');
  const submitButton = await page.$('button[type="submit"]');
  
  console.log('Email input found:', !!emailInput);
  console.log('Password input found:', !!passwordInput);
  console.log('Submit button found:', !!submitButton);
  
  // Check button state
  const isDisabled = await page.evaluate(() => {
    const btn = document.querySelector('button[type="submit"]');
    return btn ? btn.disabled : null;
  });
  console.log('Submit button disabled:', isDisabled);
  
  await browser.close();
})();
