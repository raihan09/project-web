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
  public postQuestionImage(quest){
    return this.httpClient.get(this.apiURL +'/question/img',quest);
  }
  public postQuestionText(quest){
    return this.httpClient.post(this.apiURL +'/question/text',quest);
  }
  public deleteQuestion(id){
    return this.httpClient.delete(this.apiURL +'/question/'+id);
  }
  public updateQuestion(id){
    return this.httpClient.put(this.apiURL +'/question/id/',id);
  }
}