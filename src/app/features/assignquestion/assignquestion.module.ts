import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignquestionRoutingModule } from './assignquestion-routing.module';
import { ListassignquestionComponent } from './listassignquestion/listassignquestion.component';
import { AddassignquestionComponent } from './addassignquestion/addassignquestion.component';
import { UpdateassignquestionComponent } from './updateassignquestion/updateassignquestion.component';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { AppCommonModule } from 'src/app/app.common.module';


@NgModule({
  declarations: [ListassignquestionComponent, AddassignquestionComponent, UpdateassignquestionComponent],
  imports: [
    CommonModule,
    AssignquestionRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ]
})
export class AssignquestionModule { }
