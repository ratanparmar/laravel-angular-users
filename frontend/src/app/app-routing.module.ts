import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import { UserAddComponent} from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
const routes: Routes = [
  {path: 'user-list' , component : UserListComponent} ,
  {path: 'user-add' , component : UserAddComponent} ,
  {path: 'user-edit' , component : UserEditComponent} ,
  { path: '',   redirectTo: '/user-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
