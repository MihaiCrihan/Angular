import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DateJsonService } from '../date-json.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  basket: any = [];
  totalPrice: number;
  promoEntered: false;
  promoBase: any = [];
  owner = {
    name: '',
    surname: '',
    email: '',
    phone: ''
  };
  access = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private store: StoreService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

  removeItem(name) {
    this.store.removeProduct(name);
  }

  open(content) {
    this.modalService.open(content);
    this.store.currentBasket.subscribe(basket => this.basket = basket);
    this.store.currentTotalPrice.subscribe(price => this.totalPrice = price);
  }
  saveOwnerInfo(){
    localStorage.setItem('ownerInfo', JSON.stringify(this.owner));
    alert("Thank you for purchase")
    this.basket = ''
  }
  verifyAcces() {
    if (
      this.owner.name.length > 2 &&
      this.owner.surname.length > 4 &&
      this.validEmail() &&
      this.owner.phone.toString().length > 7 &&
      this.owner.phone.toString().length < 13
    ) {
      this.access = true;
      // localStorage.setItem('ownerInfo', JSON.stringify(this.owner));
    }
  }

  validEmail() {
    const reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
    if (reg.test(this.owner.email) === false) {
      return false;
    } else {
      return true;
    }
  }
}
