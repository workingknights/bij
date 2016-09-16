import { Component } from '@angular/core';

import { Bar } from './bar';

@Component({
  selector: 'bar-form',
  templateUrl: 'app/bar-form.component.html'
})
export class BarFormComponent {

  model = new Bar(1, 'Adagio', 'Ningyocho');

  submitted = false;
  active = true;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newBar() {
    this.model = new Bar(42, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
    // console.log('add() bar name = ' + bar.name);
  }

}
