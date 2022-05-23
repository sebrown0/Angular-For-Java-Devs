import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/model/book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input()
  lastAccessed: string = '';

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  addBook(){
    const book = new Book();
    book.title = 'New Book';
    book.author = 'Steve';
    this.dataService.addBook(book);
  }

}
