import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public productDetail: any = [];
  public id: any = null;

  constructor(
    public productService: SearchService,
    public activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.id = params.id;
      }
    });
  }

  ngOnInit(): void {
    this.productService.productAPI(this.id);
  }

}
