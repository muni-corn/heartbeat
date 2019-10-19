import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthContainerComponent} from 'src/app/auth-container/auth-container.component';
import {LoginComponent} from 'src/app/login/login.component';
import {RegisterComponent} from 'src/app/register/register.component';


const routes: Routes = [
    {
        path: '',
        component: AuthContainerComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
