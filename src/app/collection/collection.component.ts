import { Component, OnInit } from '@angular/core';

import { Book } from './../core/models/book';
import { CollectionService } from './../core/services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  books: Book[];

  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.books = this.collectionService.getAllBooks();
  }

}
