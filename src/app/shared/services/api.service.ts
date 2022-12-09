import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IBook } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  loadBooks() {
    return this.http.get<{[id: string]: IBook}>(
      'https://book-library-fb8bd-default-rtdb.firebaseio.com/Books.json'
      ).pipe(map(books => {
        let booksData: IBook[] = [];
        for(let id in books) {
          booksData.push({...books[id], id});
        }
        return booksData;
      }));
  }
}
