import { Component } from '@angular/core';
import { Book, Subjects, Video } from 'src/model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExpTypescript';
  myNumber!:number;
  readonly aVar = 'notMutable';

  constructor(){
    // this.exploringArray();
    // this.exploringLoops();
    // this.exploringObjs();
    // this.exploringClasses();
    // this.exploringLambdas();
    // this.exploringStringTemplates();
    // this.exploringObjectEquality();
    this.exploringEnums();
  }

  someMehtod(){
    let aNum=9;//:number;
    const aConst:number = 1;

    aNum = 9;
  }

  exploringArray(){
    const myArr1:Array<number> = new Array<number>(5); //A list of 5 elements that are null or undefined.
    const myArr2:number[] = [1,2,3];
    console.log(myArr1);
    console.log(myArr2);
    console.log(myArr2[1]);
    console.log(myArr2.splice(1,1)); //delete element at pos 1
    console.log(myArr2.slice(1,2)); //new list

    myArr2.push(4);
    myArr2.push(5);
    console.log(myArr2);

    console.log(myArr2.pop());
    console.log(myArr2);
  }

  exploringLoops(){
    const myArr2:number[] = [1,2,3];

    for(let i=1; i <= 5; i++){
      console.log(i);
    }

    myArr2.forEach(el => {
      console.log(el);
    });

    let num = 100;

    while(num < 105){
      console.log(++num);
    }
  }

  exploringObjs(){
    let myCust = {firstName: 'Steve', lastName: 'Brown'};
    console.log(myCust);
    console.log(typeof myCust);
  }

  exploringClasses(){
    let book = new Book('Steve');
    let video:Video;

    book.title = 'Book Title';
    book.price = 100;
    console.log(book.toString());
    console.log(book.toString() + ' Cost is: ' + book.priceWithTax(0.2));
  }

  exploringLambdas(){
    const nums = [1,2,3,4,5,6,7,8,9,10];
    const oddNums = nums.filter(
      num => {
        return num % 2 === 1;
      }
    );
    console.log(oddNums);

    const evenNums = nums.filter(num => num % 2 === 0);
    console.log(evenNums);
  }

  exploringStringTemplates(){
    let book = new Book("Steve", "About String templates");
    console.log("Book title:" + book.stringTemplate(), book);
  }

  exploringObjectEquality(){
    // ==  Abstarct equality
    // Try to cast objects to same type before doing comparision.
    // console.log(1 == 1);
    // console.log(1 === 1);

    let num!:number; //undefined
    console.log('num is null = ' + num);                  //undefined
    console.log('num is null = ' + (num == null));        //true because casted
    console.log('num is null = ' + (num === null));       //false can't cast
    console.log('num is null = ' + (num === undefined));  //true

    // === String equality
  }

  exploringEnums(){
    console.log(`Art's ordinal = ${Subjects.ART}` );
    // Cannot use with custom labels
    // console.log(`Art's label = ${Subjects[0]}` );

    // Loop thru enum
    // Gets ordinals and labels if no CUSTOM LABELS defined!!
    // If custom labels then we get the labels!!
    for(const lbl in Subjects){
      console.log(`all = ${lbl}` );
    }

    console.log('========================');

    const enumArr = Object.keys(Subjects);
    for(const lbl of enumArr.slice(enumArr.length/2)){
      console.log(`label = ${lbl}` );
    }

    const getKeyValue =
      function<T extends object, U extends keyof T> (obj: T, key: U) { return obj[key] }

    // Retrieve a label for a value 1
    // let label = Object
    //   .keys(Subjects)
    //   .find( it => getKeyValue<Object, number>(Subjects, it) === '');

    // Retrieve a label for a value 2
    // for(const subj  Subjects){
    //   if(Subjects[subj] == 'SciFi'){
    //   }
    //   console.log(`Matching label = ${label}` );
    // }
  }

}
