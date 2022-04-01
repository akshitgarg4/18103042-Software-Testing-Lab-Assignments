require("chromedriver");
const webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();

const lists_using_selenium = async () => {
    await driver.get("https://www.w3schools.com/html/html_lists.asp");
    driver.manage().setTimeouts({ implicit: 5000 });
    //printing all the list items
    let items = await driver.findElement(By.xpath("//*[@class='w3col w3-half']/ol")).getText();
    console.log(items);
    //executing javascript code
    await driver.executeScript("alert('List Items Fetched')","");
};
lists_using_selenium();
