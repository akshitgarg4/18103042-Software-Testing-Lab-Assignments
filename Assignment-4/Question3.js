require("chromedriver");
const webdriver = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();

(async function test1() {
  await driver.get("https://www.facebook.com/");
  driver.manage().setTimeouts({ implicit: 5000 });
  driver.manage().window().maximize();
  let page_title = driver.getTitle();
  page_title
    .then((text) => {
      if (text === "Facebook – log in or sign up") {
        console.log("Title Verified Successfully!!!");
      } else {
        console.log("Title not verified", text);
      }
    })
    .catch((err) => {
      console.log(err);
    });
})();
