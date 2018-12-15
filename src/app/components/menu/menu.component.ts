import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
declare var $:any;
declare var Jquery:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],

 
})
export class MyMenuComponent implements OnInit {

    private contador=0;
  constructor() { 
    $(document).ready(function () {

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    
    });
  }

  items: MenuItem[];

        ngOnInit() {
            this.items=[
                {
                label:'home',icon: 'fa fa-fw fa-home',url:'home'
            },
            {
                label:'upload',icon: 'fa fa-fw fa-upload',url:'upload'
            },
            {
                label:'users',icon: 'fa fa-fw fa-user',url:'users'
            }
            
        ]
          
        }
        
        changeClass(){
            console.log("has pulsado el boton");
            
            if(this.contador==0){
              $('#sidebar').removeClass('active');
              this.contador++;
            }else{
              $('#sidebar').addClass('active');
              this.contador=0;
            }
          }

}
