import { Component } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';

import { DemoDataService } from './demo-data.service';

import template from './demo.component.html';
import style from './demo.component.scss';  // FIXME: won't work under `client/imports`
// import style from '../../../imports/client/test.component.scss'; // REVIEW: Works under `imports/client`

@Component({
  selector: 'demo',
  template,
  styles: [style],
  providers: [DemoDataService]
})
export class DemoComponent extends MeteorComponent {
  greeting: string;

  constructor(private demoDataService: DemoDataService) {
    super();

    this.greeting = 'Hello Demo Component!';
  }

  getData() {
    return this.demoDataService.getData();
  }
}
