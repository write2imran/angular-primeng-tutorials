import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/components/button/button';
import {StepsModule} from 'primeng/components/steps/steps';

import { PrimngLibsComponent } from './primng-libs.component';
import { WizardChildComponent } from './wizard-child.component';
import { WizardContainerComponent } from './wizard-container.component';

@NgModule({
  declarations: [
    PrimngLibsComponent,
    WizardChildComponent,
    WizardContainerComponent,


  ],

  imports: [
    CommonModule,
    ButtonModule,
    StepsModule,
    

  ],
  exports: [PrimngLibsComponent, WizardChildComponent, WizardContainerComponent]
})
export class WizardModule { }
