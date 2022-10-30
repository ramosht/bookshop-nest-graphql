import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './entities/Book.entity';

@Resolver(() => Book)
export class BookResolver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Query(() => [Book])
  getBooks() {
    return [];
  }
}
