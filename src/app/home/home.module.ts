import { NgModule } from '@angular/core';

import { CollectionModule } from './../collection/collection.module';
import { SearchBooksModule } from './../search-books/search-books.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    CollectionModule,
    SearchBooksModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
