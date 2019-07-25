import { NgModule } from '@angular/core';
import { PrimngLibsComponent } from './primng-libs.component';
import { WizardChildComponent } from './wizard-child.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PrimngLibsComponent,
    WizardChildComponent
  ],

  imports: [
    CommonModule

  ],
  exports: [PrimngLibsComponent, WizardChildComponent]
})
export class PrimngLibsModule { }
