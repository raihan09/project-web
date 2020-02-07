import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageQuestionService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest';

  constructor(private httpClient: HttpClient) { }
 public handleError(error: HttpErrorResponse){
    alert('Gagal');
    return throwError(error);
  }
  public getAllpackQuestion(){
    return this.httpClient.get(this.apiURL + '/question-pack/');
  }
  public findpackQuestionbyid(id:string){
    return this.httpClient.get(this.apiURL + '/question-pack/id/' + id);
  }
  public findpackQuestionbyidPack(id:string){
    return this.httpClient.get(this.apiURL + '/question-pack/package/id/' + id);
  }
  public addQuestionPack(questionPack){
    return this.httpClient.post(this.apiURL + '/question-pack/',questionPack);
  }
  public deletePackageQuestion(id){
    return this.httpClient.delete(this.apiURL +'/question-pack/'+id);
  }
  public searchQPack(questionPack){
    return this.httpClient.post(this.apiURL + '/question-pack/search/',questionPack);
  }
  
}
