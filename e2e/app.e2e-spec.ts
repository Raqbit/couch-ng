import { CouchNgPage } from './app.po';

describe('couch-ng App', () => {
  let page: CouchNgPage;

  beforeEach(() => {
    page = new CouchNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
