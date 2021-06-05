import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.component.html',
  styleUrls: ['./detail-search.component.scss'],
})
export class DetailSearchComponent implements OnInit {

  @Input() data: any = {};

  constructor(
    private router: Router
    ) {
  }

  ngOnInit() {
  }

  selectProduct() {
    this.router.navigateByUrl("/items2");
  }
  
}
