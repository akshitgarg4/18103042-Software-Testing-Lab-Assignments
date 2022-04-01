require("chromedriver");
const webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();

const dropDown_using_selenium = async () => {
  await driver.get("https://www.facebook.com/");
  driver.manage().setTimeouts({ implicit: 5000 });
  //option to be selected from drop down
  const selectOption = "3"
  await driver.findElement(By.className("_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy")).click();
  await driver.findElement(By.xpath("//select[contains(@id, 'day')]")).click();
  await driver.findElement(By.xpath(`//option[@value='${selectOption}']`)).click();
};
dropDown_using_selenium();
