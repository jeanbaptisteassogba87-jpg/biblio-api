import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(Author) private readonly repo : Repository<Author>,
    ){}
}

