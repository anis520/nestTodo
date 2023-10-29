import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  // add book

  addBookService(book: Book): string {
    console.log(uuidv4());

    this.books.push({ id: uuidv4(), ...book });
    return 'Book has been successfully added';
  }
  // update book
  updateBookService(book: Book): string {
    const index = this.books.findIndex((i) => i.id == book.id);
    this.books[index] = book;
    return 'book has been successfully updateds';
  }
  // delete book
  deleteBookService(bookId: string): string {
    book= this.books = this.books.filter((i) => i.id != bookId);
    return 'book hassben deleted';
  }
  // find books
  findAllBooks(): Book[] {
    return this.books;
  }
}
