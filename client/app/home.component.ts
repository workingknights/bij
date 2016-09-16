import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: 'app/home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router) {

    }

    ngOnInit(): void {
    }


}
