import { CandidateinitComponent } from './candidateinit/candidateinit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateinitRoutingModule } from './candidateinit-routing.module';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { CandidatequestComponent } from './candidatequest/candidatequest.component';
import { StarttestComponent } from './starttest/starttest.component';


@NgModule({
  declarations: [CandidateinitComponent, CandidatequestComponent, StarttestComponent],
  imports: [
    CommonModule,
    CandidateinitRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ]
})
export class CandidateinitModule { }
