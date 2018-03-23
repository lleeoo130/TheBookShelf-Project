import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})


export class BookFormComponent implements OnInit {

  bookForm : FormGroup;
  fileIsUploading = true;
  fileUrl : string;
  fileUploaded = false;

  constructor(private formbuilder: FormBuilder, 
              private router: Router, 
              private bookservice: BooksService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.bookForm = this.formbuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });
  }
  
  onSaveBook(){
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    const synopsis = this.bookForm.get('synopsis').value;
    const newBook = new Book(title, author);
    if(this.fileUrl && this.fileUrl!=='' ){
      newBook.photo = this.fileUrl;
    }
    newBook.synopsis = synopsis;
    this.bookservice.createNewBook(newBook);
    this.router.navigate(['books']);
  }

  onUploadFile(file : File){
    this.fileIsUploading = true;
    this.bookservice.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    )
  }

  detectFile(event){
    this.onUploadFile(event.target.files[0]);
  }
}
