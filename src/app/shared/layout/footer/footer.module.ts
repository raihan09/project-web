import { FooterComponent } from 'src/app/shared/layout/footer/footer.component';
import { NgModule } from '@angular/core';

import { AppCommonModule } from 'src/app/app.common.module';

@NgModule({
  imports: [
    AppCommonModule
  ],
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
