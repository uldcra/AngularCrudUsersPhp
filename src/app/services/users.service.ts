import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url="http://localhost/web/proyecto/";
  constructor(private http:HttpClient) { }

  listAllUsers():Observable<any>{
    return this.http.get(this.url+"crud/listUsers.php").pipe(map(data=>{
      return data;
    }));
  }

  createNewUser(user:User){
    let headers=new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let body=JSON.stringify(user);

    return this.http.post(this.url+"crud/CreateNewUser.php",body,{headers:headers}).pipe(map(data=>{
      return data;
    }));
  }

  deleteUser(user:User){
    let headers=new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let body=JSON.stringify(user);
    const params = new HttpParams()
    .set('id', user.id.toString());

    return this.http.delete(this.url+"crud/deleteUser.php",{params}).pipe(map(data=>{
      return data;
    }));
  }
  UpdateUser(user:User){
    let headers=new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let body=JSON.stringify(user);

    return this.http.put(this.url+"crud/updateUser.php",body,{headers:headers}).pipe(map(data=>{
      return data;
    }));
  }
}
