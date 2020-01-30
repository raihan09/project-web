import { ApplicantAnswerModule } from './features/applicant-answer/applicant-answer.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/gaurds/auth.gaurd';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ErrorComponent } from './shared/error/error.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('src/app/features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('src/app/features/register-user/register-user.module').then(m => m.RegisterUserModule)
    },
    {
        path: 'main',
        component: LayoutComponent,
        children: [{
            path: 'home',
            loadChildren: () => import('src/app/features/dashboard/dashboard.module').then(m => m.DashboardModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'question',
            loadChildren: () => import('src/app/features/question/question.module').then(m => m.QuestionModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'candidates',
            loadChildren: () => import('src/app/features/profile/profile.module').then(m => m.ProfileModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'assignquestion',
            loadChildren: () => import('src/app/features/assignquestion/assignquestion.module').then(m => m.AssignquestionModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'testresult',
            loadChildren: () => import('src/app/features/applicant-answer/applicant-answer.module').then(m => m.ApplicantAnswerModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'contactus',  
            loadChildren: () => import('src/app/features/contactus/contactus.module').then(m => m.ContactUsModule),
            canActivate: [AuthGuard]
        }]
    },
    {
        path: 'error',
        component: ErrorComponent,
        //loadChildren: () => import('src/app/shared/error/error.module').then(m => m.ErrorModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
