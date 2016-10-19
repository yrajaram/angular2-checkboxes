import { Angular2CheckboxsPage } from './app.po';

describe('angular2-checkboxs App', function() {
  let page: Angular2CheckboxsPage;

  beforeEach(() => {
    page = new Angular2CheckboxsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
