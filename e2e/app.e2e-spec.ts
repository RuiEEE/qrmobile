import { QrmobilePage } from './app.po';

describe('qrmobile App', () => {
  let page: QrmobilePage;

  beforeEach(() => {
    page = new QrmobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
