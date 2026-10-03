import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service.js';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService){}

    @Get()
    findAll(){
        return this.booksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : string){
        return this.booksService.findOne(Number(id));
    }

    @Post()
    create(@Body() body : {title : string , year  : number}){
        return this.booksService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id : string , @Body() body : {title?: string , year?: number}){
        return this.booksService.update(Number(id),body);
    }
}
