import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../models/customer.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-passing-query-param-demo',
  templateUrl: './passing-query-param-demo.component.html',
  styleUrls: ['./passing-query-param-demo.component.css']
})
export class PassingQueryParamDemoComponent implements OnInit {

  selectedCustomer:Customer

  customers:Customer[]=[]
  constructor(private route:ActivatedRoute,private customerService:CustomerService) {}

  ngOnInit(): void {
    this.customers = this.customerService.getAllCustomers()
    let id = this.route.snapshot.queryParams['id']
    this.selectedCustomer = this.customerService.getCustomerById(id);
    this.route.queryParams.subscribe(
      (params:Params) => {
         let id = params['customerId']
         console.log(JSON.stringify(params))
         if(id >= 0){
          this.selectedCustomer = this.customerService.getCustomerById(id)
         }
      }
    )
  }



}
