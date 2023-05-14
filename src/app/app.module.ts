import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DockModule } from 'primeng/dock';
import { TitleComponent } from './components/title/title.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    DockModule
  ],
  declarations: [
    AppComponent,  
    HomeComponent, TitleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
