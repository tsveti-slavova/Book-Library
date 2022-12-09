import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/shared/interfaces/book';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  books: IBook[] = [];
  booksSubscription!: Subscription;
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.booksSubscription = this.apiService.loadBooks().subscribe((data) => {
      this.books = data;
    });
  }

  ngOnDestroy() {
    this.booksSubscription && this.booksSubscription.unsubscribe();
  }

}
