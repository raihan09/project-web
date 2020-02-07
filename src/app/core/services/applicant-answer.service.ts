import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicantAnswerService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest';

  constructor(private httpClient: HttpClient) { }
 public handleError(error: HttpErrorResponse){
    alert('Gagal');
    return throwError(error);
  }
  public getAllaplicationAnswer(){
    return this.httpClient.get(this.apiURL + '/applicant-answer/');
  }
  public addApplicantAnswer(aplicantAnswer){
    return this.httpClient.post(this.apiURL + '/applicant-answer/',aplicantAnswer);
  }
  public updateApplicantAnswer(aplicantAnswer){
    return this.httpClient.put(this.apiURL + '/applicant-answer/',aplicantAnswer);
  }
  public deleteApplicantAnswer(id){
    return this.httpClient.delete(this.apiURL +'/applicant-answer/'+id);
  }
  public findHeaderbyid(id:string){
    return this.httpClient.get(this.apiURL + '/applicant-answer/user/id/' + id);

  }
  public postApplicantanswer(header){
    return this.httpClient.post(this.apiURL + '/applicant-answer/detail' , header);

  }
  public search(header){
    return this.httpClient.post(this.apiURL + '/applicant-answer/search' , header);

  }
}
