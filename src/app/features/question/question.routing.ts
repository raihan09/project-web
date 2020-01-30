import { QuestiontypeComponent } from './questiontype/questiontype.component';
import { QuestiondatabaseComponent } from './questiondatabase/questiondatabase.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { QuestionpackdetailComponent } from './questionpackdetail/questionpackdetail.component';
import { QuestionpacklistComponent } from './questionpacklist/questionpacklist.component';
import { Profile } from 'src/app/core/models/profile';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: QuestionpacklistComponent
    },
    {
    path: 'questionpackdetail/:id',
    component: QuestionpackdetailComponent
},
{
    path: 'newquestion',
    component: NewquestionComponent
},
{
    path: 'questiondatabase',
    component: QuestiondatabaseComponent
},
{
    path: 'questiontype',
    component: QuestiontypeComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QeustionRoutingModule { }
