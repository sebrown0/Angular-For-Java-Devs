import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/model/book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  books!:Array<Book>;
  numByAuthor!:number;
  subscription!:Subscription;
  subscription2!:Subscription;

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.books = this.dataService.books;
    this.numByAuthor = this.books.filter( it => it.author === 'Steve' ).length;
    this.subscribeToAddBookEvent();
    this.subscribeToRemoveLastBookEvent();
  }

  subscribeToAddBookEvent(){
    this.subscription = this.dataService.bookAddedEvent.subscribe(
      (newBook) => {
        if(newBook.author === 'Steve'){
          this.numByAuthor++;
        }
      },
      (error) => {
        alert('Error: ' + error);
        //When an error occurs the subscription is cancelled.
      },
        () => { // this is the complete event.
      }
    );
  }

  subscribeToRemoveLastBookEvent(){
    this.subscription2 = this.dataService.bookRemovedEvent.subscribe(
      (book) => {
        if(book.author === 'Steve'){
          this.numByAuthor--;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
