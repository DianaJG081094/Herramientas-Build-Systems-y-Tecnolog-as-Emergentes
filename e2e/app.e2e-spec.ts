import { MercadoAngularPage } from './app.po';

describe('mercado-angular App', function() {
  let page: MercadoAngularPage;

  beforeEach(() => {
    page = new MercadoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('t works!');
  });
});
