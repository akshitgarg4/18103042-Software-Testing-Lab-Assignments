require("chromedriver");
const webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();

(async function test1() {
  const user = "abc@gmail.com"
  const password = "xyz"
  await driver.get("https://www.facebook.com/");
  driver.manage().setTimeouts({ implicit: 5000 });
  driver.manage().window().maximize();
  await driver.findElement(By.id("email")).sendKeys(user);
  await driver.findElement(By.id("pass")).sendKeys(password);
  await driver.findElement(By.name("login")).click();
  console.log("Facebook Login Functionality with incorrect username and correct password done!!")
})();
