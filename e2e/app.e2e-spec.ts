import { UtTechSearchPage } from './app.po';

describe('ut-tech-search App', () => {
  let page: UtTechSearchPage;

  beforeEach(() => {
    page = new UtTechSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
