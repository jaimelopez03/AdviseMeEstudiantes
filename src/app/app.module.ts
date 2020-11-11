import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/enviroments/environment';
import { AddCourseModalPageModule } from './add-course-modal/add-course-modal.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DatePickerModule } from 'ionic4-date-picker';
import { ShowStudentsPageModule } from './show-students/show-students.module';
import { EditPersonalInfoPageModule } from './edit-personal-info/edit-personal-info.module';
import { GeneratePetitionModalPage } from './generate-petition-modal/generate-petition-modal.page';
import { GeneratePetitionModalPageModule } from './generate-petition-modal/generate-petition-modal.module';
import { MessageModalPageModule } from './message-modal/message-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    DatePickerModule,
    AddCourseModalPageModule,
    EditPersonalInfoPageModule,
    GeneratePetitionModalPageModule,
    ShowStudentsPageModule,
    MessageModalPageModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
