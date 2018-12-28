import { LightningElement, track, api } from 'lwc';

export default class ComponentWithDifferentViews extends LightningElement {

  @track showWC = true;

  @api toggle() {
    this.showWC = !this.showWC;
  }

}
