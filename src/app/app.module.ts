import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';


export const firebaseConfig ={
    apiKey: "AIzaSyCVJe6LAQgio5j-t7xvN-qj0krJwK8NRek",
    authDomain: "motolog-1d021.firebaseapp.com",
    databaseURL: "https://motolog-1d021.firebaseio.com",
    projectId: "motolog-1d021",
    storageBucket: "motolog-1d021.appspot.com",
    messagingSenderId: "64584749390"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
