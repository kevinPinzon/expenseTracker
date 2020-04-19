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

  constructor(private http: Http) { 
  //prod -
    // let urlProdu: '';

    //dev
    this.urlServices = 'http://localhost:3000/';

    this._postsURL = this.urlServices + "api/";
  }
  
  public register(): Observable<any> {
    return this.http.get(this._postsURL + 'register')
      .pipe(
        tap(_ => this.log('register')),
        catchError(this.handleError('register', []))
      );
  }
  
  public login(): Observable<any> {
    return this.http.get(this._postsURL + 'auth')
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
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

