import { Component } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//importing componenet 
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'product', component: ProductComponent }, // Ensure you import ProductComponent
  { path: 'customer', component: CustomerComponent },
  { path: 'invoice', component: InvoiceComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule , RouterModule ,MatSidenavModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
