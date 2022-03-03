import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerAppState } from '../+state/customer.reducer';
import { CustomerActions } from '../+state/customer.actions';
import { fromCustomer } from '../+state/customer.selectors';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent  {
  customers$ = this.store.select(fromCustomer.selectAll);

  constructor(private store: Store) {}
}
