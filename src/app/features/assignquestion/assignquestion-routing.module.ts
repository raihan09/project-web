import { UpdateassignquestionComponent } from './updateassignquestion/updateassignquestion.component';
import { AddassignquestionComponent } from './addassignquestion/addassignquestion.component';
import { ListassignquestionComponent } from './listassignquestion/listassignquestion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ListassignquestionComponent
},
{
path: 'addassignquestion',
component: AddassignquestionComponent
},
{
path: 'updateassingquestion',
component: UpdateassignquestionComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignquestionRoutingModule { }
