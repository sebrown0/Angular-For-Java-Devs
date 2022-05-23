import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  removeLastBook(){
    let numBooks = this.dataService.books.length-1;
    if(numBooks > 0){
      this.dataService.books.pop();
    }

  }
}
