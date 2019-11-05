import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FriendsPageComponent } from 'src/app/friends-page/friends-page.component';
import { HistoryPageComponent } from 'src/app/history-page/history-page.component';
import { MainContainerComponent } from 'src/app/main-container/main-container.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HomeComponent,
        MainContainerComponent,
        FriendsPageComponent,
        HistoryPageComponent,
        NavigationBarComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule
    ]
})
export class HomeModule { }
