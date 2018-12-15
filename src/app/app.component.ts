import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var Jquery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    

  }
  title = 'proyecto';
  contador=0;
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
