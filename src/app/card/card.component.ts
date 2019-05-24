import { Component, OnInit } from '@angular/core';
// import { DateJsonService } from '../date-json.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  components: any;
  fields: any;
  type: string;
  cpuFilter = '';
  ramFilter = '';

  constructor(
    private store: StoreService
  ) { }

  ngOnInit(): void {
   this.store.currentComponentKey.subscribe(data => {
     this.components = data['data'];
     this.fields = data['fields'];
     this.type = data['type']
     console.log(this.components);
   })
   this.store.currentCpuFilter.subscribe(filter => this.cpuFilter = filter);
   this.store.currentRamFilter.subscribe(filter => this.ramFilter = filter);
  }

  add(component) {
    this.store.addToBasket(component, this.type);
    if( this.type == 'motherboard' || this.type == 'cpu' || this.type == 'ram')
    this.setFilter(component);

  }
  
  setFilter(key) {
    if(this.type == 'cpu') {
      this.store.setFilter('cpu', key.socket.value)
    } else {
      if(this.type == 'ram') {
        this.store.setFilter('ram', key.memoryslot.value)
      } else {
        this.store.setFilter('motherboard', key.socket.value, key.memoryslot.value)
      }
    }
  }
}
