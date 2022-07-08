import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthorDetailsComponent } from './author/author-details.component';
import { AuthorListComponent } from './author/author-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AuthorListComponent, AuthorDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
