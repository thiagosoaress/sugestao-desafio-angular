import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { environment } from './../../../environments/environment';

/**
* This class provides the Home service with methods to read names and add names.
*/
@Injectable()
export class PessoaService {
  /**
  * Creates a new PessoaService with the injected Http.
  * @param {Http} http - The injected Http.
  * @constructor
  */
  constructor(private http: Http) { }
  /**
  * Returns an Observable for the HTTP GET request for the JSON resource.
  */
  obterPessoas() {
    return this.http.get(`${environment.API_URL}/pessoas`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  /**
  * Handle HTTP error
  */
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
