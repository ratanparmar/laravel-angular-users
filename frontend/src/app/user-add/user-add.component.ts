import { Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { User } from '../user';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  
  users:User;
  
  
  constructor(private userservice:UserService,private router:Router) {};
  register(userData) {
    this.userservice.addUsers(userData.value).subscribe(
      (response: any) => {
        //console.log(response)
        this.router.navigate(['/'])
    }, 
    (error: any) => {
      console.log(error)
  })
  };
  
  ngOnInit() {
  }

}
