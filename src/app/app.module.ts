import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectsComponent } from './selects/selects.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { DateJsonService } from './date-json.service';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';
import { NgbModalModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectsComponent,
    MenuComponent,
    CardComponent,
    FilterComponent,
    CartComponent,
    HistoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModalModule,
    NgbAccordionModule,
    FormsModule
  ],
  providers: [DateJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
