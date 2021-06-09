import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { SEARCH } from '../../constants/search';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public searchDetail = SEARCH;

  constructor(
    private router: Router,
    private searchService: SearchService
  ) { }

  public onSearch(term: string | null | undefined) {
    if (!term) return;
    this.searchService.searchAPI(term);
    this.router.navigateByUrl("/items" + "?search=" + term);
  }

  public goToHome() {
    this.router.navigateByUrl("/");
  }
}
