import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header class="container" />
    <hr />
    <main class="container">
      <ng-content></ng-content>
    </main>
    <hr />
    <app-footer class="container" />
  `,
})
export class LayoutComponent {}
