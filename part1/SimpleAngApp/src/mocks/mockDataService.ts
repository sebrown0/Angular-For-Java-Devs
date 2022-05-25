import { EventEmitter } from "@angular/core";
import { DataServiceInterface } from "src/app/data.service";
import { Book } from "src/model/book";

export class MockDataService implements DataServiceInterface {
  bookRemovedEvent = new EventEmitter<Book>();
  books = new Array<Book>();
  bookAddedEvent = new EventEmitter<Book>();

  addBook(book:Book){

  }

  removeLastBook(): void {
    throw new Error("Method not implemented.");
  }

}
