import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Bar } from './bar';

@Injectable()
export class BarService {
  private barsUrl = 'api/bars';

  constructor(private http: Http) {}

  getBars(): Observable<Bar[]> {
    console.log('getBars()');
    return this.http.get(this.barsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getBar(name: string): Observable<Bar> {
    console.log('getBar() name = ' + name);
    return this.http.get(`${this.barsUrl}/name/${name}`)
      .map(this.extractBar)
      .catch(this.handleError);
  }

  private extractBar(res: Response) {
    let body = res.json() as Bar;
    let firstElem = body[0];
    console.log('firstElem = ' + firstElem);
    var bar = new Bar(firstElem._id, firstElem.name, firstElem.area, firstElem.stations);
    console.log("bar = " + JSON.stringify(bar));
    return bar;
  }

  private extractData(res: Response) {
    console.log('extractData()');
    let body = res.json();
    console.log(body);
    return body || {};
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }
}
