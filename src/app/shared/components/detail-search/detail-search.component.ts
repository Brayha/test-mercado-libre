import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.component.html',
  styleUrls: ['./detail-search.component.scss'],
})
export class DetailSearchComponent implements OnInit {

  @Input() data: any = {};

  constructor(
    private router: Router,
    private selectProductId: SearchService
    ) {
  }

  ngOnInit() {

  }

   selectProduct(id: any) {
    this.router.navigateByUrl("/items/" + id);
  }
  
}
