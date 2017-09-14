import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./Elite.View/home/home.component";
import { UsersComponent } from "./Elite.View/users/users.component";



const routes: Routes = [
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    {path:'users', pathMatch:'full', component: UsersComponent }
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent];
