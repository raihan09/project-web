import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/psikotest';

  constructor(private httpClient: HttpClient) { }
 public handleError(error: HttpErrorResponse){
    alert('Gagal');
    return throwError(error);
  }
  public reportCorrectAnswer(){
    return this.httpClient.get(this.apiURL + '/report/question/correct/pdf');
  }
  public reportWrongAnswer(){
    return this.httpClient.get(this.apiURL + '/report/question/wrong/pdf');
  }
  public reportCandidate(idheader){
    return this.httpClient.get(this.apiURL + '/report/candidate'+idheader+'/pdf');
  }
  public reportPackQuestCorrect(){
    return this.httpClient.get(this.apiURL + '/report/package-question/correct/pdf');
  }
  public reportPackQuestWrong(){
    return this.httpClient.get(this.apiURL + '/report/package-question/wrong/pdf');
  }
  public reportPackageCorrect(){
    return this.httpClient.get(this.apiURL + '/report/package/correct/pdf');
  }
  public reportPackageWrong(){
    return this.httpClient.get(this.apiURL + '/report/package/wrong/pdf');
}
public totalCandidate(){
  return this.httpClient.get(this.apiURL + '/dashboard/total-candidate');
}
public totalQuestion(){
  return this.httpClient.get(this.apiURL + '/dashboard/total-question');
}
public rejectedCand(){
  return this.httpClient.get(this.apiURL + '/dashboard/total-candidate-not-pass');
}
public approvedCand(){
  return this.httpClient.get(this.apiURL + '/dashboard/total-candidate-pass');
}
}