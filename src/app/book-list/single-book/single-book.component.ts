import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private bookservice: BooksService) { }

  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.params['id'];

    this.bookservice.getSingleBook(+id).then(
      (book: Book) => {
        this.book = book;
      }
    );  
  }

  onBack(){
    this.router.navigate(['/books']);
  }

}
