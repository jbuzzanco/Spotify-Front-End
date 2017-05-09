import { AngularSpotifyPage } from './app.po';

describe('angular-spotify App', () => {
  let page: AngularSpotifyPage;

  beforeEach(() => {
    page = new AngularSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
