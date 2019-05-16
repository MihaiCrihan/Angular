import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateJsonService } from './date-json.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private componentKey = new BehaviorSubject({});
  currentComponentKey = this.componentKey.asObservable();

  private cpuFilter = new BehaviorSubject('');
  currentCpuFilter = this.cpuFilter.asObservable();

  private ramFilter = new BehaviorSubject('');
  currentRamFilter = this.ramFilter.asObservable();

  basket = [];

  constructor(private data: DateJsonService) { }

  getComponents() {
    this.data.getData().subscribe(data => this.componentKey.next(data))
  }

  setFilter(type: string, firstKey: string, secondKey?: string) {
    if(type == 'cpu') {
      this.cpuFilter.next(firstKey);
    } else {
      if(type == 'ram') {
        this.ramFilter.next(firstKey)
      } else {
        this.cpuFilter.next(firstKey);
        this.ramFilter.next(secondKey);
      }
    }
  }

  removeFilter(type: string, value: string) {
    if(type == 'cpu') {
      this.cpuFilter.next('');
    } else {
      this.ramFilter.next('');
    }
  }

  addToBasket(component: {}) {

  }
}
