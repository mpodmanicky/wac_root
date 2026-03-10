import { newE2EPage } from '@stencil/core/testing';

describe('mp-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mp-ambulance-wl-app></mp-ambulance-wl-app>');

    const element = await page.find('mp-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
