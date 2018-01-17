import { Component } from '@angular/core';

import { Book } from './../core/models/book';
import { ApiBooksService } from './../core/services/api-books.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss']
})
export class SearchBooksComponent {

  books: Book[];
  error = '';

  constructor(
    private apiBooksService: ApiBooksService
  ) { }

  search(value: string) {
    this.apiBooksService.searchBooks(value)
      .subscribe(book => {
        this.books = book;
        this.error = this.apiBooksService.error;
      });
  }

}
