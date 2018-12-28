import { LightningElement, track } from 'lwc';

export class ComponentWithDeclarativeEvent extends LightningElement {
  @track lowercaseHandled = false;
  @track kebabHandled = false;
  @track camelHandled = false;
  @track capsHandled = false;
  @track pascalHandled = false;

  handleLowercaseEvent() {
    this.lowercaseHandled = true;
  }
  handleKebabEvent() {
    this.kebabHandled = true;
  }
  handleCamelEvent() {
    this.camelHandled = true;
  }
  handleCapsEvent() {
    this.capsHandled = true;
  }
  handlePascalEvent() {
    this.pascalHandled = true;
  }
}
