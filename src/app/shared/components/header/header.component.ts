import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { SEARCH } from '../../constants/search';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public searchDetail = SEARCH;

  constructor(
    private router: Router,
    private searchService: SearchService
  ) {

  }

  ngOnInit() {

  }

  public onSearch(e: any) {
    this.searchService.searchAPI(e);
    console.log(e);
    this.router.navigateByUrl("/items" + "?search=" + e);
  }
}
