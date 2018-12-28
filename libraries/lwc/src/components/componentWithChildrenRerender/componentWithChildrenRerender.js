import { LightningElement, track } from 'lwc';

export default class ComponentWithChildrenRerender extends LightningElement {
  @track count = 1;

  connectedCallback() {
    Promise.resolve().then(() => {
      this.count += 1;
    });
  }
}
