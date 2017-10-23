import { Myproject4Page } from './app.po';

describe('myproject4 App', () => {
  let page: Myproject4Page;

  beforeEach(() => {
    page = new Myproject4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
