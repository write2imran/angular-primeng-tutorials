import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InputMaskComponent } from './inputmask/inputmask.component';


const router: Routes = [
    { path: '', redirectTo: 'inputmask', pathMatch: 'full' },
    { path: 'inputmask', component: InputMaskComponent },
    { path: '**', redirectTo: 'inputmask' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
 