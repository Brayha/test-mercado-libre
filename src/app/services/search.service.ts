import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SearchService {
  @Output() searchResultsLoaded: EventEmitter<string> = new EventEmitter();
  public searchData = [];
  public categories: any = [];
  public productData: any = [];

  constructor(
    private http: HttpClient
  ) { }

  public searchAPI(query: string) {
    this.http.get("http://localhost:3000/api/items?q=" + query).subscribe(
      (results: any) => {
        this.searchData = results.items;
        this.categories = results.categories;
        this.searchResultsLoaded.emit('loaded');
      }
    );
  }

  public productAPI(id: any) {
    this.http.get("http://localhost:3000/api/items/" + id).subscribe(
      (results: any) => {
        this.productData = results.item;
        return this.productData;
      }
    );
  }
}
