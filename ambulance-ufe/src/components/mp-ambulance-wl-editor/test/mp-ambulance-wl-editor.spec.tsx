import { newSpecPage } from '@stencil/core/testing';
import { MpAmbulanceWlEditor } from '../mp-ambulance-wl-editor';

describe('mp-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MpAmbulanceWlEditor],
      html: `<mp-ambulance-wl-editor></mp-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <mp-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mp-ambulance-wl-editor>
    `);
  });
});
