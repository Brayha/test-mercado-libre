import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  public searchResults:any = [];
  public query:any = null;
  
  constructor(
    private activeRute: ActivatedRoute, 
    private searchService: SearchService
    ) {
      this.activeRute.queryParams.subscribe(params => {
          console.log('Param: ', params.q);
          this.query = params.q;
      });
  }

  ngOnInit(): void {
    this.searchService.searchAPI(this.query);
    this.searchService.searchResultsLoaded.subscribe(
        loaded => {
            this.searchResults = this.searchService.searchData;
        }
    );
  }
}
