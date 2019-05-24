import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  ownerInfo: any;
  basket: any = [];

  constructor() { }

  ngOnInit() {
    this.ownerInfo = JSON.parse(localStorage.getItem('ownerInfo')) || this.ownerInfo;
    this.basket = JSON.parse(localStorage.getItem('basket')) || this.basket;
    console.log();
  }

}
