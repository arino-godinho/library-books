import { Injectable } from '@angular/core';

import { Book } from './../models/book';

@Injectable()
export class CollectionService {

  books: Book[] = [];

  add(book: Book) {
    this.books.push(book);
  }

  remove(id: string) {
    this.books = this.books
      .filter((book: Book) => book.id !== id);
  }

  getAllBooks(): Book[] {
    return this.books;
  }

  getBookById(id: string): boolean {
    let encontrou = false;
    this.books
      .filter((book: Book) => {
        if (book.id === id) {
          encontrou = true;
        }
      });
      return encontrou;
  }

}
