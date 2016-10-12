import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
@Component({
    moduleId: module.id,
    selector: 'customers-selector',
    templateUrl: 'customers.component.html',
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    customers: any[];

    constructor(private _customerService: CustomerService){}

    // not called automatically by testing
    // but is called by angular
    ngOnInit(){
        this.customers =this._customerService.getCustomers();
    }

}