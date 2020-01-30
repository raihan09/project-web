import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { ProfileRoutingModule } from 'src/app/features/profile/profile.routing';
import { ProfileComponent } from './profile.component';

interface City{
  name:string;
  code:string;
}

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    ProfileComponent  
  ]
})
export class ProfileModule { }
