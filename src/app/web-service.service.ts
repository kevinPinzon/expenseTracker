import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  private _postsURL = null;
  public urlServices: any;
  private headers: any;

  constructor(private http: Http) { 
  //prod -
    // let urlProdu: '';

    //dev
    this.urlServices = 'http://localhost:3000/';

    this._postsURL = this.urlServices + "api/";

    this.headers = new Headers();
  }
  
  public register(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this._postsURL + "register", JSON.stringify(data), { headers: this.headers }).
        subscribe(res => {
          this.log('register');
          resolve(res.json());
        }, (err) => {
            this.handleError('register', [])
            reject(err);
        });

    });
  }
  
  public login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this._postsURL + "auth", JSON.stringify(data), { headers: this.headers }).
        subscribe(res => {
          this.log('login');
          resolve(res.json());
        }, (err) => {
            this.handleError('login', [])
            reject(err);
        });

    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('service: ' + message);
  }

}

