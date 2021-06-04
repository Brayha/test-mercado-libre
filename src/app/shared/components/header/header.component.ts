import { Component, OnInit } from '@angular/core';
import { SEARCH } from '../../constants/search'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchDetail = SEARCH;

  constructor() { }

  ngOnInit() {
  }

}
