import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity.js';

@Injectable()
export class BooksService {
  private books = [
    { id: 1, title: 'Le gong a bégayé', year: 2009 },
    { id: 2, title: "L'enfant et la rivière", year: 2016 },
    { id: 3, title: 'Ose être soi', year: 2013 },
  ];

  constructor(
    @InjectRepository(Book) private readonly repo: Repository<Book>,
  ) {}

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    const book = await this.repo.findOneBy({id});
    if (!book) {
      throw new NotFoundException(`Book ${id} not found`);
    }
    return book;
  }

  async create(data: CreateBookDto) {
    const newBook = this.repo.create(data);
    return await this.repo.save(newBook)
  }

  async update(id: number, body: UpdateBookDto) {
    const book = await this.findOne(id)
    Object.assign(book, body);
    return await this.repo.save(book)
  }

  async delete(id: number) {
    const book = await this.findOne(id);
    this.repo.delete(book);
    return { deleted: true };
  }
}
