import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest';

  constructor(private httpClient: HttpClient) { }
 public handleError(error: HttpErrorResponse){
    alert('Gagal');
    return throwError(error);
  }
  public getAllUser(){
    return this.httpClient.get(this.apiURL + '/user');
  }
  
  public findProfilebyid(id:string){
    return this.httpClient.get(this.apiURL + '/user/id/' + id);

  }
  public findUserbyname(name:string){
    return this.httpClient.get(this.apiURL + '/user/name/' + name);

  }
  public findProfilebyName(name:string){
    return this.httpClient.get(this.apiURL + '/user/search/name/' + name);

  }
  public findProfilebyPhone(id:string){
    return this.httpClient.get(this.apiURL + '/profile/search/' + id);

  }
  public findProfilebyEmail(id:string){
    return this.httpClient.get(this.apiURL + '/profile/search/' + id);
  }
  public deleteUser(id){
    return this.httpClient.delete(this.apiURL + '/user/'+id);
  }
  public login(user){ 
    return this.httpClient.post(this.apiURL + '/login',user);
  }
  public register(user){
    return this.httpClient.post(this.apiURL + '/user',user);
  }
  }
