import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetTimeRoutingModule } from './set-time-routing.module';
import { SetTimeComponent } from './set-time.component';

@NgModule({
  imports: [
    CommonModule,
    SetTimeRoutingModule
  ],
  declarations: [SetTimeComponent]
})
export class SetTimeModule { }
