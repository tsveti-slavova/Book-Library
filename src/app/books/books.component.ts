import { Component } from '@angular/core';
import { IBook } from '../shared/interfaces/book';
import { BOOKS } from '../books-database';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  // book: IBook = {
  //   id: 1,
  //   name: 'Pride and Prejudice',
  //   author: 'Jane Austen'
  // };

  // books = BOOKS;
}
