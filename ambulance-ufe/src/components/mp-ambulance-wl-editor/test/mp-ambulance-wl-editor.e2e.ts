import { newE2EPage } from '@stencil/core/testing';

describe('mp-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mp-ambulance-wl-editor></mp-ambulance-wl-editor>');

    const element = await page.find('mp-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
