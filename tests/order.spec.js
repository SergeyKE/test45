const { test, expect } = require('@playwright/test');

test('buy', async ({ page }) => {
  const startTime = new Date();
  await page.goto('https://dev.mepart.ru/personal/cart/');
  await page.fill('[id=input-autocomplit]', 'A113707110CA');
  await page.click('[id=input-autocomplit-submit]');
  await page.click('.with--border:has-text("CHERY")');
  await page.click('a[href="/product/a113707110ca-CHERY"]');
  await page.click('//*[@id="arProduct"]/div[1]/div[8]/a');
  await page.click('[id=basket-add-popup-submit]');
  await page.click('a.cart-link:has-text("Корзина")');
  await page.click(':text("Оформить заказ")');
  await page.fill('input[name="NAME"]', 'Ivan');
  await page.fill('input[name="PHONE"]', '99999999999');
  await page.fill('input[name="EMAIL"]', 'test@gmail.com');
  await page.evaluate(() => {
    document.querySelector('input[type="radio"][name="DELIVERY_ID"][value="3"]').checked = true;
  });
  await page.evaluate(() => {
    document.querySelector('input[type="radio"][name="PAY_SYSTEM_ID"][value="4"]').checked = true;
  });
  await page.click('button[data-result="BUTTON_TEXT"]');
  const endTime = new Date();
  const totalTime = (endTime - startTime) / 1000;
  console.log(`Успешно. Время выполнения теста: ${totalTime} секунд.`); // результат 
});
