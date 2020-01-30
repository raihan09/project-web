import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest';

  constructor(private httpClient: HttpClient) { }
 public handleError(error: HttpErrorResponse){
    alert('Gagal');
    return throwError(error);
  }
  public getAllQuestion(){
    return this.httpClient.get(this.apiURL + '/question');
  }
  public findQuestionByid(id:string){
    return this.httpClient.get(this.apiURL + '/question/id/' + id);

  }
  public postQuestionImage(){
    return this.httpClient.get(this.apiURL +'/question/img');
  }

}