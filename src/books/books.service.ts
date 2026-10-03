import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    private books = [
        {id : 1 , title : "Le gong a bégayé" , year: 2009 },
        {id : 2 , title : "L'enfant et la rivière" , year: 2016 },
        {id : 3 , title : "Ose être soi" , year: 2013 } ,
    ];

    findAll(){
        return this.books ;
    }

    findOne(id: number){
        return this.books.find(b => b.id === id);
    }

    create(data : {title : string , year  : number}){
        const newBook = {
            id : this.books.length + 1 ,
            ...data,
        };
        this.books.push(newBook);
        return newBook ;
    }

    update(id: number , body: {title?: string , year?: number}){
        const book = this.findOne(id);
        if(!book) return null;

        Object.assign(book,body);
        return book ;
    }
}