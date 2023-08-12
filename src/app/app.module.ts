import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './Core/core.module';
import { StudentModule } from './student/student.module';
import { DepartmentModule } from './department/department.module';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StudentModule,
    DepartmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
