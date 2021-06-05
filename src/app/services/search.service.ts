import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SearchService {
  @Output() searchResultsLoaded:EventEmitter<string> = new EventEmitter();
  public searchData = [
    // {
    //   id: 'MLA918561816',
    //   title: 'Apple iPhone 11 (64 Gb) - Negro',
    //   price: {
    //     currency: 'ARS',
    //     amount: 149999,
    //     decimals: 0,
    //   },
    //   picture: 'http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg',
    //   condition: 'new',
    //   free_shipping: true,
    // },
    // {
    //   id: 'MLA913236423',
    //   title: 'Apple iPhone 11 (128 Gb) - Negro',
    //   price: {
    //     currency: 'ARS',
    //     amount: 161999,
    //     decimals: 0,
    //   },
    //   picture: 'http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg',
    //   condition: 'new',
    //   free_shipping: true,
    // },
    // {
    //   id: 'MLA905133735',
    //   title: ' iPhone SE (2nd Generation) 128 Gb Blanco',
    //   price: {
    //     currency: 'ARS',
    //     amount: 110699,
    //     decimals: 0,
    //   },
    //   picture: 'http://http2.mlstatic.com/D_620208-MLA42321158044_062020-I.jpg',
    //   condition: 'new',
    //   free_shipping: true,
    // },
    // {
    //   id: 'MLA914865635',
    //   title: ' iPhone SE (2nd Generation) 64 Gb Blanco',
    //   price: {
    //     currency: 'ARS',
    //     amount: 97600,
    //     decimals: 0,
    //   },
    //   picture: 'http://http2.mlstatic.com/D_732162-MLA42320762979_062020-I.jpg',
    //   condition: 'new',
    //   free_shipping: true,
    // },
  ];
  
  constructor(private http: HttpClient) {}

  public searchAPI(query:any) {
    this.http.get("http://localhost:3000/api/items?q="+query).subscribe(
        (results:any) => {
            this.searchData = results.items;
            this.searchResultsLoaded.emit('loaded');
        }
    );
  }
}
