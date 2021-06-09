import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.component.html',
  styleUrls: ['./detail-search.component.scss'],
})
export class DetailSearchComponent {
  @Input() data: any = {};

  constructor(
    private router: Router
  ) { }

  public selectProduct(id: string) {
    this.router.navigateByUrl("/items/" + id);
  }
}
