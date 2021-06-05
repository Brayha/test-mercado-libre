import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.component.html',
  styleUrls: ['./detail-search.component.scss'],
})
export class DetailSearchComponent implements OnInit {

  @Input()
  data: any = {};
  constructor() {}

  ngOnInit() {}
}
