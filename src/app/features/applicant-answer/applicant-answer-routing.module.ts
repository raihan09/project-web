import { ApplicantAnswerComponent } from './applicant-answer/applicant-answer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ApplicantAnswerComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantAnswerRoutingModule { }
