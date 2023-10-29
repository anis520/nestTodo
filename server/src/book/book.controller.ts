import { BookService } from './book.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './data/book.dto';

@Controller()
export class BookController {
  constructor(private bookService: BookService) {}
  @Get('/findAll')
  getAllBooks(): Book[] {
    return this.bookService.findAllBooks();
  }
  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') BookId: string): string {
    return this.bookService.deleteBookService(BookId);
  }

  @Post('/add')
  addBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
}
