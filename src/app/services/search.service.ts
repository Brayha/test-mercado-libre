import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SearchService {
  @Output() searchResultsLoaded:EventEmitter<string> = new EventEmitter();
  public searchData = [

  ];

  public productData = [

  ];
  
  constructor(private http: HttpClient) {}

  public searchAPI(query:any) {
    this.http.get("http://localhost:3000/api/items?q="+query).subscribe(
        (results:any) => {
            this.searchData = results.items;
            this.searchResultsLoaded.emit('loaded');
            console.log(results);
        }
    );
  }
  
  public productAPI(id:any) {
    this.http.get("http://localhost:3000/api/items/"+id).subscribe(
        (results:any) => {
            this.productData = results.item;
            console.log('Info producto', this.productData);
        }
    );
  }
}
