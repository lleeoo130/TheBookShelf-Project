import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../models/book.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books : Book[];
  bookSubscription: Subscription;



  constructor(private router: Router, private booksservice: BooksService) { }

  ngOnInit() {
    this.bookSubscription = this.booksservice.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksservice.getBooks();
    this.booksservice.emitBooks();
  }
  onNewBook(){
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book){
    this.booksservice.removeBook(book);
  }
  onViewBook(id: number){
    this.router.navigate(['/books', 'view', id]);
  }



  ngOnDestroy(){
    this.bookSubscription.unsubscribe();
  }

}
