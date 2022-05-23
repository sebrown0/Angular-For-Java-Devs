import { EventEmitter, Injectable } from '@angular/core';
import { Book } from 'src/model/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  books:Array<Book> = new Array<Book>();
  bookAddedEvent = new EventEmitter<Book>();

  constructor() {
    const book1 = new Book();
    book1.author = 'Steve';
    book1.title = 'Title 1'
    book1.price = 22.99;
    this.books.push(book1);

    const book2 = new Book();
    book2.author = 'Bob';
    book2.title = 'Title 2'
    book2.price = 12.99;
    this.books.push(book2);

    const book3 = new Book();
    book3.author = 'Amanda';
    book3.title = 'Title 3'
    book3.price = 1.99;
    this.books.push(book3);
  }

  addBook(book:Book){
    this.books.push(book);
    this.bookAddedEvent.emit(book);
  }

}
