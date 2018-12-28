import { LightningElement, track } from 'lwc';

export class ComponentWithImperativeEvent extends LightningElement {
  @track eventHandled = false;

  renderedCallback() {
    if (this.handleTestEvent) {
      return;
    }
    this.handleTestEvent = () => {
      this.eventHandled = true;
    };
    this.shadowRoot
      .getElementById("wc")
      .addEventListener("camelEvent", this.handleTestEvent);
  }
}
