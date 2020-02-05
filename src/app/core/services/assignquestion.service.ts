import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignquestionService {


  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest';

  constructor(private httpClient: HttpClient) { }
 public handleError(error: HttpErrorResponse){
    alert('Gagal');
    return throwError(error);
  }
  public getAllAssignQuestion(){
    return this.httpClient.get(this.apiURL + '/assign-question/');
  }
  public findAssignQuestionbyid(id:string){
    return this.httpClient.get(this.apiURL + '/question-pack/id/' + id);
  }
  public addAssignQuestion(AssignQuestion){
    return this.httpClient.post(this.apiURL + '/assign-question', AssignQuestion);
  }
  public deleteAssignQuestion(id){
    return this.httpClient.delete(this.apiURL + '/assign-question/'+id);
  }
  public updateAssignQuestion(AssignQuestion,id){
    return this.httpClient.put(this.apiURL + '/assign-question/'+id,AssignQuestion);
  }
  public getAssignQuestionbyUser(userId){
    return this.httpClient.get(this.apiURL + '/assign-question/user/'+userId+'/package');
  }
}
