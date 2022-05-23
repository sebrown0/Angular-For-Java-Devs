import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentPage = '1';

  @Output()
  public pageChangedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(page: string){
    this.currentPage = page;
    console.log('Current page is: ' + this.currentPage);
    this.pageChangedEvent.emit(page);
  }

}
