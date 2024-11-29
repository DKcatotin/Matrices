import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'deberes',loadChildren:()=>import('./deberes/deberes.module').then(deb=>deb.DeberesModule)},
    {path: '', redirectTo: '/deberes', pathMatch: 'full' },
];
