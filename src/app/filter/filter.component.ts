import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  hided = false;
  wasRemoved = false;
  cpuFilter = '';
  ramFilter = '';
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.currentCpuFilter.subscribe(filter => this.cpuFilter = filter);
    this.store.currentRamFilter.subscribe(filter => this.ramFilter = filter);
  }

  removeFilter(type: string, value: string) {
    this.store.removeFilter(type, value);
  }

  showHide(button: any, body: any) {
    if(this.hided) {
      body.classList.add('show');
      if(this.wasRemoved) {
        body.classList.remove('hide')
      }
      this.hided = !this.hided;
      button.innerHTML = '<'
    } else {
      body.classList.add('hide');
      body.classList.remove('show');
      this.wasRemoved = true;
      this.hided = !this.hided;
      button.innerHTML = '>'
    }
  }
}
