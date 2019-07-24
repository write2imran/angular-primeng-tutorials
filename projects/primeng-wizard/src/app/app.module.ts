import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {StepComponent} from './step.component';
import {StepsComponent} from './steps.component';

import {ButtonModule} from 'primeng/components/button/button';
import {StepsModule} from 'primeng/components/steps/steps';

@NgModule({
    imports: [CommonModule, ButtonModule, StepsModule],
    exports: [StepComponent, StepsComponent],
    declarations: [StepComponent, StepsComponent]
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
