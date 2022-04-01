require("chromedriver");
const webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();

const lists_using_selenium = async () => {
    await driver.get("https://www.w3schools.com/html/html_lists.asp");
    driver.manage().setTimeouts({ implicit: 5000 });
    //iterating a particular item of the list
    console.log(await driver.findElement(By.xpath("//*[@class='w3col w3-half']/ol/li[3]")).getText());
};
lists_using_selenium();
