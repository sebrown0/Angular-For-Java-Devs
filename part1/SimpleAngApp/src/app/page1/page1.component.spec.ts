import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockDataService } from 'src/mocks/mockDataService';
import { Book } from 'src/model/book';
import { DataService } from '../data.service';

import { Page1Component } from './page1.component';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Num books is incremented correctly', () =>{
    const booksBySteveStartVal = component.numByAuthor;
    const book = new Book();
    book.author = 'Steve';

    // We can do this becuase the dataservice is Public (but it shouldn't be)
    // component.dataService.addBook(book);

    // Instead we should get the injected DataService from the fixture.
    const dataService = fixture.debugElement.injector.get(DataService);
    dataService.addBook(book);

    // The test
    expect(component.numByAuthor).toEqual(booksBySteveStartVal+1);

  });

  // Inject DataService in this method.
  it('Num books is incremented correctly with the DataService injected from this method.', () =>{
    const booksBySteveStartVal = component.numByAuthor;
    const book = new Book();
    book.author = 'Steve';

    // Inject DataService directly.
    const dataService = new DataService();
    component = new Page1Component(dataService);
    // Have to run ngOnInit() because it's not run automatically.
    component.ngOnInit();
    dataService.addBook(book);

    // The test
    expect(component.numByAuthor).toEqual(booksBySteveStartVal+1);
  });

  // Use MockDataService.
  it('Num books is incremented correctly with the DataService injected from this method.', () =>{
    const booksBySteveStartVal = component.numByAuthor;
    const book = new Book();
    book.author = 'Steve';

    // Inject DataService directly.
    const dataService = new MockDataService();
    component = new Page1Component(dataService);
    // Have to run ngOnInit() because it's not run automatically.

    component.ngOnInit();
    dataService.addBook(book);

    // The test
    expect(component.numByAuthor).toEqual(booksBySteveStartVal+1);
  });

});
