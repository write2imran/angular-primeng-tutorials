import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { WizardModule } from 'projects/primng-libs/src/public-api';




// import {ButtonModule} from 'primeng/components/button/button';
// import {StepsModule} from 'primeng/components/steps/steps';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    WizardModule, 
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
