import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passing-route-param-demo',
  templateUrl: './passing-route-param-demo.component.html',
  styleUrls: ['./passing-route-param-demo.component.css']
})
export class PassingRouteParamDemoComponent implements OnInit{

  activeCustomer:Customer|null
  id:number;
  customers:Customer[]=[]

  constructor(public customerService:CustomerService,public route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.customers = this.customerService.getAllCustomers()
  }

}
