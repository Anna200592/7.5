const {
  clickElement,
  getText
} = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Tickets tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://qamid.tmweb.ru/client/index.php", {
      timeout: 10000
    });
  });

  test("one seat reservation'", async () => {
    await clickElement(page, "a:nth-child(2) > span.page-nav__day-week");
    await clickElement(page, "a.movie-seances__time");
    await clickElement(page, "div[class='buying-scheme__wrapper'] div:nth-child(1) span:nth-child(5)");
    await clickElement(page, "button.acceptin-button");
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });
  test("two seat reservation'", async () => {
    await clickElement(page, "a:nth-child(2) > span.page-nav__day-week");
    await clickElement(page, "a.movie-seances__time");
    await clickElement(page, "div[class='buying-scheme__wrapper'] div:nth-child(1) span:nth-child(5)");
    await clickElement(page, "div[class='buying-scheme__wrapper'] div:nth-child(1) span:nth-child(6)");
    await clickElement(page, "button.acceptin-button");
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });
  test("reservation of occupied places'", async () => {
    await clickElement(page, "a:nth-child(2) > span.page-nav__day-week");
    await clickElement(page, "a.movie-seances__time");
    const actual = await page.$eval("button.acceptin-button", (e) =>
      e.getAttribute("disabled"));
    expect(actual).toContain("true");
  });
});