import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Bicicletas/listar/listar.component';
import { EditComponent } from './Bicicletas/edit/edit.component';
import { AddComponent } from './Bicicletas/add/add.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule,HttpClient  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';




@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditComponent,
    AddComponent,
    SigninComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
