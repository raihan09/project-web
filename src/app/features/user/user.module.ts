import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { EmployeesRoutingModule } from 'src/app/features/user/user.routing';
import { UserComponent } from 'src/app/features/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    UserComponent
  ]
})
export class EmployeesModule { }
