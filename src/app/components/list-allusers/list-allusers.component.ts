import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

import { SelectItem } from 'primeng/api';

import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { User } from 'src/app/models/IUser';


@Component({
  selector: 'app-list-allusers',
  templateUrl: './list-allusers.component.html',
  styleUrls: ['./list-allusers.component.css']
})
export class ListAllusersComponent implements OnInit {

  constructor(private userService:UsersService) { }
  public users:User[]=[];
  public cols:any[];

  email: SelectItem[]=[];
  names: SelectItem[]=[];

  age: String;

  yearTimeout: any;

  public user:User;
  public newCreateUser:User={
    name:"",
    edad:0,
    email:"",
    job:"",
  }
    
  
  public TheNewUser:boolean;
  displayDialog: boolean;
  createUserDialog:boolean;
  selectedUser:User;

  ngOnInit() {
    this.listUsers();

  }

  public listUsers(){
    this.userService.listAllUsers().subscribe((data:any)=>{
      this.users=data;
     
      this.names.push({ label: "All names", value: null });
      for (let index = 0; index < this.users.length; index++) {
        this.email.push({ label:  this.users[index].email.valueOf(), value: this.users[index].email.valueOf() }); 
        this.names.push({ label:  this.users[index].name.valueOf(), value: this.users[index].name.valueOf() });
      }
     
     
    },error=>{
      console.log(error);
    });
   for (let index = 0; index < this.users.length; index++) {
     this.email.push({ label:  this.users[index].email.valueOf(), value: this.users[index].email.valueOf() }); 
     
   }
   
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'age', header: 'age' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'email' }
  ];
  }

onYearChange(event, dt) {
 console.log(event.value);
        if (this.age) {
            clearTimeout(this.yearTimeout);
        }

        this.yearTimeout = setTimeout(() => {
            dt.filter(event.value, 'age', 'gt');
        }, 250);
    }
  onRowSelect(event) {
      console.log(event.data.id);
      
      this.TheNewUser = false;
      this.user = (event.data);
      this.displayDialog = true;
  }
  delete(){
    this.userService.deleteUser(this.user).subscribe(resp=>{
      console.log(resp);
      this.listUsers();
    },error=>{
      console.error(error);
    }
    );
    
   
    this.displayDialog = false;
  }
  createUser(){
   
    this.createUserDialog = true;
  }
  updateUser(user:User){
    console.log(user);
    this.userService.UpdateUser(this.user).subscribe(resp=>{
      console.log(resp);
      this.listUsers();
    },
    error=>{
      console.error(error);
    });
    this.displayDialog = false;
  }
  saveUser(){
    console.log(this.newCreateUser);

    this.userService.createNewUser(this.newCreateUser).subscribe(resp=>{
      console.log("Usuario creado",resp);
      this.listUsers();
    },
    error=>{
      console.error("Ha ocurrido un error ",error);
    });
   
    this.createUserDialog = false;
  }


}
