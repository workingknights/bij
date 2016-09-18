import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: 'app/home.component.html',
  styleUrls: ['app/home.component.css']
})
export class HomeComponent{

  constructor(
    private router: Router) {

    }
}
