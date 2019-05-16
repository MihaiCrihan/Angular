import { Component, OnInit } from '@angular/core';
import { DateJsonService } from '../date-json.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.css']
})
export class SelectsComponent implements OnInit {
  data: any;

  constructor(
    private dataService: DateJsonService,
    private store: StoreService
    ) { }

  ngOnInit() {
    this.dataService.setKey('components')
    this.dataService.getData().subscribe(data => this.data = data);
    this.dataService.setKey('motherboard');
    this.store.getComponents();
  }

  drawCard(key: string){
    this.dataService.setKey(key)
    this.store.getComponents();
  }
}
