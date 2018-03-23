import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    var config = {
      apiKey: "AIzaSyDyszY0DlKfLKkw3vbuxya5GgBav7Dg2CE",
      authDomain: "bookshelves-51938.firebaseapp.com",
      databaseURL: "https://bookshelves-51938.firebaseio.com",
      projectId: "bookshelves-51938",
      storageBucket: "",
      messagingSenderId: "1080345453163"
    };
    firebase.initializeApp(config);
  }
}
