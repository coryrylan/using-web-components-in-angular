import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'web-component-essentials';

@Component({
  selector: 'app-root',
  template: `
  <h1>Angular Application using Web Components</h1>

  <p>
    {{open ? 'open' : 'closed'}}
  </p>
  
  <x-dropdown [title]="myTitle" (show)="toggle($event)">
    Hello from Web Component in Angular!
  </x-dropdown>
  `,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Tells Angular we will have custom tags in our templates
  ]
})
export class App {
  myTitle = 'project-angular';
  open = false;

  toggle(event: any) {
    console.log(event);
    this.open = event.detail;
  }
}

bootstrapApplication(App);
