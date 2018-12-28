import { LightningElement, track } from 'lwc';

export class ComponentWithProperties extends LightningElement {
    @track bool = true;
    @track num = 42;
    @track str = "LWC";
    @track arr = [ "L", "W", "C" ];
    @track obj = { org: "salesforce", repo: "lwc" };
}
