import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { AulaComponent } from './aula/aula.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component'

const xrutas:Routes=[
  {path: 'alu', component: AlumnosComponent},
  {path: 'doc', component: DocentesComponent},
  {path: 'au', component: AulaComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: ErrorpageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AulaComponent,
    AlumnosComponent,
    DocentesComponent,
    HomeComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(xrutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
