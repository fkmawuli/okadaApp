import { OkadaAppPage } from './app.po';

describe('okada-app App', () => {
  let page: OkadaAppPage;

  beforeEach(() => {
    page = new OkadaAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
