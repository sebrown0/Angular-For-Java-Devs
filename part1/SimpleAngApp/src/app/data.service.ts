import { EventEmitter, Injectable } from '@angular/core';
import { Book } from 'src/model/book';

export interface DataServiceInterface {
  books:Array<Book>;
  bookAddedEvent:EventEmitter<Book>;
  bookRemovedEvent:EventEmitter<Book>;

  addBook(book:Book):void;
  removeLastBook():void;
}

@Injectable({
  providedIn: 'root'
})
export class DataService implements DataServiceInterface {
  books:Array<Book> = new Array<Book>();
  bookAddedEvent = new EventEmitter<Book>();
  bookRemovedEvent = new EventEmitter<Book>();

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
    if(book.author === 'Bob'){
      this.bookAddedEvent.error('Books by Bob not allowed');
    }else{
      this.books.push(book);
      this.bookAddedEvent.emit(book);
    }
  }

  removeLastBook(){
    let numBooks = this.books.length-1;
    if(numBooks >= 0){
      const book = this.books.pop();
      this.bookRemovedEvent.emit(book);
    }else{
      this.bookRemovedEvent.error('No more books to delete!')
    }
  }

}
