import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  PHP_API_SERVER = "http://127.0.0.1:8000";
  
  getUsers():Observable<User[]>{
    
    return this.http.get<User[]>(`${this.PHP_API_SERVER}/api/user`);
  }

  addUsers(user:User){
    
    return this.http.post(`${this.PHP_API_SERVER}/api/users`,user,{responseType: 'text'});
  }

  updateUsers(id:number,user:User):Observable<User>{
    //console.log(id)
    //console.log(user)
    return this.http.put<User>(`${this.PHP_API_SERVER}/api/user/${id}`,user);
  }

  deleteUsers(id:number):Observable<{}>{
    return this.http.delete(`${this.PHP_API_SERVER}/api/user/${id}`);
  }
}


