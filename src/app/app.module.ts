import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { HttpService } from 'src/app/http.service';
import { AuthService } from 'src/app/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        HttpService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
