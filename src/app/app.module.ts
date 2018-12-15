import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { Menu,MenuItemContent,MenuModule } from 'primeng/menu';
import { MegaMenuModule} from 'primeng/megamenu';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import {  TableModule} from 'primeng/table';
import { SliderModule } from 'primeng/components/slider/slider';
import { DropdownModule, DialogModule } from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/fileupload';
import { SlideMenuModule } from 'primeng/components/slidemenu/slidemenu';
import {MessagesModule} from 'primeng/components/messages/messages'
import {MessageModule} from 'primeng/components/message/message';



import { HomeComponent } from './components/home/home.component';
import { MyMenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListAllusersComponent } from './components/list-allusers/list-allusers.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyMenuComponent,
    ListComponent,
    PageNotFoundComponent,
    Menu,
    MenuItemContent,
    ListAllusersComponent,

    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AccordionModule,
    RadioButtonModule,
    ButtonModule,
    PanelModule,
    MegaMenuModule,
    TableModule,
    SliderModule,
    FormsModule,
    DropdownModule,
    MultiSelectModule,
    FileUploadModule,
    MessageModule,
    MessagesModule,
    SlideMenuModule,
    DialogModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
