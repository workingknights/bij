import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Bar } from './bar';
import { BarService } from './bar.service';

@Component({
  selector: 'bar-detail',
  templateUrl: 'app/bar-detail.component.html'
})
export class BarDetailComponent implements OnInit {
  bar: Bar;
  errorMessage: string;

  constructor(
    private barService: BarService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('BarDetailComponent: ngOnInit()');
    this.route.params.forEach((params: Params) => {
      let name = params['name'];
      console.log('BarDetailComponent: ngOnInit() name = ' + name);
      this.barService.getBar(name)
        .subscribe(
          bar => this.bar = bar,
          error => this.errorMessage = <any>error);
    });
  }
}
