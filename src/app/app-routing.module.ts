import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { guardGuard } from './guards/guard.guard';
import { NotesComponent } from './pages/notes/notes.component';
import { NewComponent } from './pages/new/new.component';
import { loginGuard } from './guards/login.guard';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:'home', component:NewComponent},
  {path:'new', component:NewComponent,
  canActivate:[loginGuard]},
  {path:'notes', component:NotesComponent,
  canActivate:[loginGuard]},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'', redirectTo:'/new', pathMatch:'full'},
  {path:'**', component:Error404Component}
  // {path:'b',canActivate:[guardGuard],loadComponent:()=>import('./pages/b/b.component').then(m=>m.BComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
