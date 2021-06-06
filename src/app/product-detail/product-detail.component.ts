import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public productDetail:any = [];
  public id: any = null;

  constructor(
    private productService: SearchService
  ) { }

  ngOnInit(): void {
    this.productService.productAPI(this.id);
    this.productDetail = this.productService.productData;
    
    console.log( 'aqui es', this.productService.productData);
  }

}
