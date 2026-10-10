import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.entity.js';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto.js';
import { UpdateAuthorDto } from './dto/update-author.dto.js';

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

  async create(data : CreateAuthorDto){
    const newAuthor = this.repo.create(data);
    return await this.repo.save(newAuthor);
  }

  async update(id : number , data : UpdateAuthorDto){
    const author = await this.findOne(id);
    Object.assign(author,data);
    return await this.repo.save(author) ;
  }
}
