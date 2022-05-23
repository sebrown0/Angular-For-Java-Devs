import { Component, OnInit } from '@angular/core';
import { Book } from 'src/model/book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  books!:Array<Book>;
  numByAuthor!:number;

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.books = this.dataService.books;
    this.numByAuthor = this.books.filter( it => it.author === 'Steve' ).length;
    this.dataService.bookAddedEvent.subscribe(
      (newBook) => {
        if(newBook.author === 'Steve'){
          this.numByAuthor++;
        }
      },
      (error) => {

      }
    );
  }

}
