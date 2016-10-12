import { RailsClientPage } from './app.po';

describe('rails-client App', function() {
  let page: RailsClientPage;

  beforeEach(() => {
    page = new RailsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
