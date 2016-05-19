export class PoschorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('poschor-app h1')).getText();
  }
}
