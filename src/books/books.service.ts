import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';

@Injectable()
export class BooksService {
  private books = [
    { id: 1, title: 'Le gong a bégayé', year: 2009 },
    { id: 2, title: "L'enfant et la rivière", year: 2016 },
    { id: 3, title: 'Ose être soi', year: 2013 },
  ];

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException(`Book ${id} not found`);
    }
    return book;
  }

  create(data: CreateBookDto) {
    const ids = this.books.map((book) => book.id);
    const id = Math.max(0, ...ids) + 1;
    const newBook = {
      id: id,
      ...data,
    };
    this.books.push(newBook);
    return newBook;
  }

  update(id: number, body: UpdateBookDto) {
    const book = this.findOne(id);
    Object.assign(book, body);
    return book;
  }

  delete(id: number) {
    this.findOne(id);
    this.books = this.books.filter((b) => b.id !== id);
    return { deleted: true };
  }
}
