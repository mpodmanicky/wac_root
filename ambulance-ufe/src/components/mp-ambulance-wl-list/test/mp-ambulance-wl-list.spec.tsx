import { newSpecPage } from '@stencil/core/testing';
import { MpAmbulanceWlList } from '../mp-ambulance-wl-list';

describe('mp-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MpAmbulanceWlList],
      html: `<mp-ambulance-wl-list></mp-ambulance-wl-list>`,
    });
    
    const wlList = page.rootInstance as MpAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
    
    
    // expect(page.root).toEqualHtml(`
    //   <mp-ambulance-wl-list>
    //     <mock:shadow-root>
    //       <slot></slot>
    //     </mock:shadow-root>
    //   </mp-ambulance-wl-list>
    // `);
  });
});
