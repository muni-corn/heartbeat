import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from 'src/app/main-container/main-container.component';
import { HomeComponent } from 'src/app/home/home.component';


const routes: Routes = [
    {
        path: '',
        component: MainContainerComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
