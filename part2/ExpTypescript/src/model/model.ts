export enum Subjects{
  ART='Arts',
  HISTORY='Science & Maths',
  SCIENCE='SciFi',
  LITERATURE='Eng Lit',
  CHEMISTRY='Dope making'
}

export class Book{
  title!:string;
  author!:string;
  price!:number;

  readonly id:number = 1;

  constructor(author:string, title?: string){
    this.author = author;
    if(title){
      this.title = title;
    }
  }

  priceWithTax(taxRate: number): number{
    return this.price * (1+taxRate);
  }

  stringTemplate(){
    return `title: ${this.title}`;
  }

  toString(): string{
    return 'Title: ' + this.title + ", Author: " + this.author;
  }
}

export class Video{
  title!:string;
  author!:string;
  price!:number;
}
