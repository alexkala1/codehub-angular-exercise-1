import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CountriesModule } from './countries/countries.module';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent
  ],
  imports: [
    BrowserModule,
    CountriesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
