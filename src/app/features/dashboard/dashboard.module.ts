import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { DashboardRoutingModule } from 'src/app/features/dashboard/dashboard.routing';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }