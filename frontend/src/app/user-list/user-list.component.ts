import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';
//import {FormGroup} from '@angular/forms';
//import {NgForm} from '@angular/forms';
//import { FormsModule } from '@angular/forms'
import { Location} from '@angular/common'
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users :User[];
  isEnable=false;
  editableUser:User[];

  constructor(private userservice:UserService,private router: Router,private location:Location) { }
  
  getUser(){

    this.userservice.getUsers().subscribe((users:User[])=>{
      this.users = users;
    });
  }

  editUser(user:User[]){
    this.isEnable = true
    this.editableUser = user;
    
  }

  deleteUser(id:number){
    this.userservice.deleteUsers(id).subscribe((user: User)=>{
    this.getUser();
    });
  }

  updateUser(user,id){
    this.userservice.updateUsers(id,user.value).subscribe(()=>{
      location.reload();

    })
  }
  cancel(){
    this.isEnable=false
  }
  ngOnInit() {
    this.getUser();
  }

}
