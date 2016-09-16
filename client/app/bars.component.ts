import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bar } from './bar';
import { BarService } from './bar.service';

@Component({
  selector: 'bars',
  templateUrl: 'app/bars.component.html',
  providers: [BarService]
})
export class BarsComponent implements OnInit {
  errorMessage: string;
  bars: Bar[];

  constructor(
    private router: Router,
    private barService: BarService) {
  }

  ngOnInit(): void {
    this.getBars();
  }

  getBars(): void {
    this.barService.getBars()
        .subscribe(
          bars => this.bars = bars,
          error => this.errorMessage = <any>error);
  }
}
