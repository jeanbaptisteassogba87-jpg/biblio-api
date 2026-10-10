import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private readonly repo: Repository<Author>,
  ) {}

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id : number){
    const author = await this.repo.findOneBy({id});
    if(!author){
        throw new NotFoundException(`Author ${id} not found`);
    }
    return author ;
  }

}
