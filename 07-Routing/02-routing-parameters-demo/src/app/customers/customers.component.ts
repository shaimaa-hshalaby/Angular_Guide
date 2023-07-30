import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  activeCustomer:Customer|null=null;
  id:number;

  constructor(public customerService:CustomerService,public route:ActivatedRoute){
  }

  customers:Customer[]=[];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.activeCustomer = this.customerService.getCustomerById(this.id)
    this.customers = this.customerService.getAllCustomers();
    this.route.params.subscribe(
      (params:Params)=>{
          this.id = params['id']
          this.activeCustomer = this.customerService.getCustomerById(this.id)
      }
    )
  }

}
