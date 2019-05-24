import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateJsonService } from './date-json.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  basket: any = [];

  private componentKey = new BehaviorSubject({});
  currentComponentKey = this.componentKey.asObservable();

  private cpuFilter = new BehaviorSubject('');
  currentCpuFilter = this.cpuFilter.asObservable();

  private ramFilter = new BehaviorSubject('');
  currentRamFilter = this.ramFilter.asObservable();

  private sourceBasket = new BehaviorSubject<any>([]);
  currentBasket = this.sourceBasket.asObservable();

  private totalPrice = new BehaviorSubject<number>(0);
  currentTotalPrice = this.totalPrice.asObservable();

  constructor(private data: DateJsonService) {
    this.basket = JSON.parse(localStorage.getItem('basket')) || this.basket;
    this.sourceBasket.next(this.basket);
    this.getTotalPrice();
  }

  getComponents() {
    this.data.getData().subscribe(data => this.componentKey.next(data));
  }

  setFilter(type: string, firstKey: string, secondKey?: string) {
    if (type === 'cpu') {
      this.cpuFilter.next(firstKey);
    } else {
      if (type === 'ram') {
        this.ramFilter.next(firstKey);
      } else {
        this.cpuFilter.next(firstKey);
        this.ramFilter.next(secondKey);
      }
    }
  }

  removeFilter(type: string, value: string) {
    if (type === 'cpu') {
      this.cpuFilter.next('');
    } else {
      this.ramFilter.next('');
    }
  }

  addToBasket(component: any, type: any) {
    if (this.basket.some(el => el.name === component.name)) {
      const key: number = this.basket.findIndex(el => el.title === component.title);
      this.basket[key].quantity = this.basket[key].quantity + 1;
      this.sourceBasket.next(this.basket);
      this.getTotalPrice();
      this.updateStorage();
    } else {
      this.basket.push({ type: type, name: component.name, quantity: 1, price: component.price });
      this.sourceBasket.next(this.basket);
      this.getTotalPrice();
      this.updateStorage();
    }
  }

  removeProduct(keyName: string) {
    const key: number = this.basket.findIndex(el => el.name === keyName);
    this.basket.splice(key, 1);
    this.sourceBasket.next(this.basket);
    this.updateStorage();
    this.getTotalPrice();
  }

  updateStorage() {
    localStorage.setItem('basket', JSON.stringify(this.basket));
  }

  getTotalPrice() {
    let temp = 0;
    this.basket.forEach(component => {
      temp += component.quantity * component.price;
    });
    this.totalPrice.next(temp);
  }
}
