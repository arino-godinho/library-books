import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { Book } from './../../core/models/book';
import { ApiBooksService } from './../../core/services/api-books.service';
import { CollectionService } from './../../core/services/collection.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  inCollection: boolean;

  private volumeId: any;

  constructor(
    private apiBooksService: ApiBooksService,
    private collectionService: CollectionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(map(params => params['id']), tap(id => (this.volumeId = id)))
      .subscribe(id => this.getBook());
  }

getBook() {
  this.apiBooksService.retrieveBook(this.volumeId)
  .subscribe(book => {
    this.book = book;
    this.inCollection = this.collectionService.getBookById(this.book.id);
  });
}

add(book: Book) {
  this.collectionService.add(book);
  this.inCollection = true;
}

remove(book: Book) {
  this.collectionService.remove(book.id);
  this.inCollection = false;
}

get id() {
  return this.book.id;
}

get title() {
  return this.book.volumeInfo.title;
}

get subtitle() {
  return this.book.volumeInfo.subtitle;
}

get description() {
  return this.book.volumeInfo.description;
}

get thumbnail() {
  return (
    this.book.volumeInfo.imageLinks &&
    this.book.volumeInfo.imageLinks.smallThumbnail
  );
}

}
