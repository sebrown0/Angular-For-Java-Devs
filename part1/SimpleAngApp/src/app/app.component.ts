import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleAngApp';
  startTime!: string;
  currentPage = '1';

  @ViewChild('page2', {static:true})
  page2!: Page2Component;

  @ViewChild('footer')
  footerComponent!: FooterComponent;

  ngOnInit(): void {
    this.startTime = new Date().toString();
    console.log('start time = ' + this.startTime);
  }

  updateLastAccessed(){
    console.log('last val = ' + this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }

  incrementHitCounter(page:string): void{
    this.currentPage = page;
    if(page==='2'){
      this.page2.incrementHitCounter();
    }
  }

}
