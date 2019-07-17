import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users :User[];
  constructor(private userservice:UserService) { }
  
  getUser(){
    console.log("on");
    this.userservice.getUsers().subscribe((users:User[])=>{
      this.users = users;
      console.log("User fetched");
    })
  }
  ngOnInit() {
    this.getUser();
  }

}
