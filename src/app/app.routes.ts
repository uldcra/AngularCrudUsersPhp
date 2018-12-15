import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListComponent } from './components/list/list.component';
import { ListAllusersComponent } from './components/list-allusers/list-allusers.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'upload', component: ListComponent },
    { path: 'users', component: ListAllusersComponent },
    { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
     },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
