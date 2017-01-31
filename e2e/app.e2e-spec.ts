import { SoapSitePage } from './app.po';

describe('soap-site App', function() {
  let page: SoapSitePage;

  beforeEach(() => {
    page = new SoapSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
