import { ApplicantAnswerComponent } from './applicant-answer/applicant-answer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantAnswerRoutingModule } from './applicant-answer-routing.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { AppCommonModule } from 'src/app/app.common.module';


@NgModule({
  declarations: [ApplicantAnswerComponent],
  imports: [
    CommonModule,
    ApplicantAnswerRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ]
})
export class ApplicantAnswerModule { }
