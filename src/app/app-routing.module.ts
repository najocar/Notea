import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { Error404Component } from './pages/error404/error404.component';
import { SubaComponent } from './pages/a/suba/suba.component';
import { SubbComponent } from './pages/a/subb/subb.component';
import { guardGuard } from './guards/guard.guard';
import { NotesComponent } from './pages/notes/notes.component';
import { NewComponent } from './pages/new/new.component';

const routes: Routes = [
  {path:'home', component:NewComponent},
  {path:'new', component:NewComponent,
  canActivate:[LoginGuard]},
  {path:'notes', component:NotesComponent},
  {path:'', redirectTo:'/new', pathMatch:'full'},
  {path:'**', component:Error404Component}
  // {path:'b',canActivate:[guardGuard],loadComponent:()=>import('./pages/b/b.component').then(m=>m.BComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
