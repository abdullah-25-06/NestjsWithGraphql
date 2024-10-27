import { Injectable } from '@nestjs/common';
import { Author } from './book.model';

@Injectable()
export class BookService {
  findAll(): Promise<Author[]> {
    const author = new Author();
    author.id = 1;
    author.firstName = 'Any';
    author.lastName = 'BANY';
    return Promise.resolve([author]);
  }
}
