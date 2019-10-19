import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import {AuthContainerComponent} from 'src/app/auth-container/auth-container.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AuthContainerComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule
    ]
})
export class AuthModule { }
