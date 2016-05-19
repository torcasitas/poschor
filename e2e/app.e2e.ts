import { PoschorPage } from './app.po';

describe('poschor App', function() {
  let page: PoschorPage;

  beforeEach(() => {
    page = new PoschorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('poschor works!');
  });
});
