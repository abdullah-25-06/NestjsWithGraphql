import { Query, Resolver } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Author } from './book.model';

@Resolver((of) => Author)
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query((returns) => [Author])
  author(): Promise<Author[]> {
    return this.bookService.findAll();
  }
}
