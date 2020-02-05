import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {


  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest';

  constructor(private httpClient: HttpClient) { }
 public handleError(error: HttpErrorResponse){
    alert('Gagal');
    return throwError(error);
  }
  public getAllpack(){
    return this.httpClient.get(this.apiURL + '/package/');
  }
  public findpackbyid(id:string){
    return this.httpClient.get(this.apiURL + '/package/id/' + id);
  }
  public addPackage(pack){
    return this.httpClient.post(this.apiURL + '/package/', pack);
  }
  public deletePackage(id){
    return this.httpClient.delete(this.apiURL + '/package/'+id);
  }
  public updatePackage(pack){
    return this.httpClient.put(this.apiURL + '/package/',pack);
  }
}
