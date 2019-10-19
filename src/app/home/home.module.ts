import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FriendsPageComponent } from 'src/app/friends-page/friends-page.component';
import { HistoryPageComponent } from 'src/app/history-page/history-page.component';
import { MainContainerComponent } from 'src/app/main-container/main-container.component';


@NgModule({
    declarations: [
        HomeComponent,
        MainContainerComponent,
        FriendsPageComponent,
        HistoryPageComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
