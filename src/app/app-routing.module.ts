import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes: Routes = [
  {path:'',redirectTo:'/user-creation',pathMatch:'full'},
  {path:'user-creation',component:UserAddComponent},
  {path:'user-list',component:UserListComponent},
  {path:'user-edit',component:UserEditComponent},
  {path:'**',redirectTo:'/user-creation',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
