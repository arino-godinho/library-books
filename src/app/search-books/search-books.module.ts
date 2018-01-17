import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { BookAuthorsComponent } from './book-authors/book-authors.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookPreviewListComponent } from './book-preview-list/book-preview-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { SearchBooksComponent } from './search-books.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SearchBooksComponent,
    BookPreviewComponent,
    BookAuthorsComponent,
    BookPreviewListComponent,
    BookDetailComponent
  ],
  declarations: [
    SearchBooksComponent,
    BookPreviewComponent,
    BookAuthorsComponent,
    BookPreviewListComponent,
    BookDetailComponent
  ]
})
export class SearchBooksModule { }
