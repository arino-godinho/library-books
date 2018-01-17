import { NgModule } from '@angular/core';

import { SearchBooksModule } from './../search-books/search-books.module';
import { SharedModule } from './../shared/shared.module';
import { CollectionComponent } from './collection.component';

@NgModule({
  imports: [
    SharedModule,
    SearchBooksModule
  ],
  exports: [
    CollectionComponent
  ],
  declarations: [
    CollectionComponent
  ]
})
export class CollectionModule { }
