import { newSpecPage } from '@stencil/core/testing';
import { MpAmbulanceWlApp } from '../mp-ambulance-wl-app';

describe('mp-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [MpAmbulanceWlApp],
      html: `<mp-ambulance-wl-app base-path="/"></mp-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('mp-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [MpAmbulanceWlApp],
      html: `<mp-ambulance-wl-app base-path="/ambulance-wl/"></mp-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('mp-ambulance-wl-list');
  });
});
