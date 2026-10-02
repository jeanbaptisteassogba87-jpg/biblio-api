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
}