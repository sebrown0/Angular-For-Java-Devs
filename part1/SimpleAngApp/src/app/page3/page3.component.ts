import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit, OnDestroy {
  subscrption!:Subscription;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.subscribeToRemoveLastBookEvent();
  }

  subscribeToRemoveLastBookEvent(){
    this.subscrption = this.dataService.bookRemovedEvent.subscribe(
      (book) => {
        alert(`Removed book ${book.title}.`);
      },
      (error) =>{
        alert('There was an error while deleting  the last book.');
      }
    );
  }

  removeLastBook(){
    this.dataService.removeLastBook();
  }

  ngOnDestroy(): void {
    this.subscrption.unsubscribe();
  }

}
