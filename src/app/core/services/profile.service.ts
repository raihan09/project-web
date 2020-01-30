import { Injectable } from '@angular/core';

import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  [x: string]: any;
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest';

  constructor(private httpClient: HttpClient) { }
 public handleError(error: HttpErrorResponse){
    alert('Gagal');
    return throwError(error);
  }
  public getAllProfile(){
    return this.httpClient.get(this.apiURL + '/profile');
  }
  public findProfilebyid(id:string){
    return this.httpClient.get(this.apiURL + '/profile/id/' + id);

  }
   findProfilebyname(id:string){
    this.httpClient.get(this.apiURL + '/profile/search/' + id);

  }
  public findProfilebyPhone(id:string){
    return this.httpClient.get(this.apiURL + '/profile/search/' + id);

  }
  public findProfilebyEmail(id:string){
    return this.httpClient.get(this.apiURL + '/profile/search/' + id);

  }
}
