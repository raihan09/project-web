import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionpacklistComponent } from './questionpacklist/questionpacklist.component';
import { QuestionpackdetailComponent } from './questionpackdetail/questionpackdetail.component';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { AppCommonModule } from 'src/app/app.common.module';
import { QeustionRoutingModule } from './question.routing';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { QuestiondatabaseComponent } from './questiondatabase/questiondatabase.component';
import { QuestiontypeComponent } from './questiontype/questiontype.component';



@NgModule({
  declarations: [QuestionpacklistComponent, QuestionpackdetailComponent, NewquestionComponent, QuestiondatabaseComponent, QuestiontypeComponent],
  imports: [
    CommonModule,
    QeustionRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
    
  ],
  exports :[
    QuestionpacklistComponent,
    QuestionpackdetailComponent
  ]
})
export class QuestionModule { }
