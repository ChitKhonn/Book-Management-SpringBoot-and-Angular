import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CreateBookComponent,
    UpdateBookComponent,
    BookDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

