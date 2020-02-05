import { StarttestComponent } from './starttest/starttest.component';
import { CandidateinitComponent } from './candidateinit/candidateinit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatequestComponent } from './candidatequest/candidatequest.component';


const routes: Routes=[
  {
      path: '',
      component: CandidateinitComponent
  },
  {
    path: 'question/:id',
    component: CandidatequestComponent
},
{
  path: 'starttest/:id',
  component: StarttestComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateinitRoutingModule { }
