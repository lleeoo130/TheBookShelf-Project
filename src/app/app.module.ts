import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';




const appRoutes: Routes = [
  { path: 'auth/signup', component: SignUpComponent },
  { path: 'auth/signin', component: SignInComponent },
  { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
  { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
  { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '**', redirectTo: 'books' }
];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
],
  providers: [AuthService, BooksService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
