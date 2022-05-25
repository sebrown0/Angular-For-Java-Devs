import { TestBed } from '@angular/core/testing';
import { Book } from 'src/model/book';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Add book increses size of array', ()=>{
    const book = new Book();
    const service:DataService = TestBed.inject(DataService);
    service.addBook(book);
    // fail();
    expect(service.books.length).toEqual(4);
  });

  it('Check that the event emitter is firing when a book is added', () => {
    const service:DataService = TestBed.inject(DataService);
    spyOn(service.bookAddedEvent, 'emit');
    const book = new Book();
    service.addBook(book);
    expect(service.bookAddedEvent.emit).toHaveBeenCalledOnceWith(book);
  });

});
