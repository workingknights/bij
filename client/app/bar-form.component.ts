import { Component } from '@angular/core';

import { Bar } from './bar';
import { BarService } from './bar.service';

@Component({
  selector: 'bar-form',
  templateUrl: 'app/bar-form.component.html'
})
export class BarFormComponent {

  model = new Bar(-1, '', '');
  errorMessage: string;

  submitted = false;
  active = true;

  constructor(private barService: BarService) {}

  onSubmit() {
    this.barService.addBar(this.model).subscribe(
      bar => this.model = bar,
      error => this.errorMessage = <any>error);
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newBar() {
    this.model = new Bar(-1, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}
