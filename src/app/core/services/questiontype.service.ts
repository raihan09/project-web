import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestiontypeService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest';

  constructor(private httpClient: HttpClient) { }
 public handleError(error: HttpErrorResponse){
    alert('Gagal');
    return throwError(error);
  }
  public getAllQuestionType(){
    return this.httpClient.get(this.apiURL + '/question-type');
  }
  public addQuestionType(questionType){
    return this.httpClient.post(this.apiURL + '/question-type/',questionType);

  }
  public updateQuestionType(questionType){
    return this.httpClient.put(this.apiURL + '/question-type/' ,questionType);

  }
  public deleteQuestionType(id:string){
    return this.httpClient.delete(this.apiURL + '/question-type/id/' + id);

  }
  public findQuestionTypeByid(id:string){
    return this.httpClient.get(this.apiURL + '/question-type/id/' + id);

  }
}