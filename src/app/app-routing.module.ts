import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from 'src/app/auth-guard.service';


const routes: Routes = [
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        canActivate: [AuthGuardService]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/auth/login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
