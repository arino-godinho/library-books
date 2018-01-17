import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

import { Book } from './../models/book';

@Injectable()
export class ApiBooksService {

  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';
  error = '';

  constructor(private http: HttpClient) {}

  searchBooks(queryTitle: string): Observable<Book[]> {
    this.error = '';
    return this.http
      .get<{ items: Book[] }>(`${this.API_PATH}?q=${queryTitle}`)
      .pipe(
        map(books => books.items || []),
        catchError(this.handleError('searchBooks', []))
      );
  }

  retrieveBook(volumeId: string): Observable<Book> {
    return this.http.get<Book>(`${this.API_PATH}/${volumeId}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.error = error.error.error.message;
      return of(result as T);
    };
  }

}
