import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers:Customer[]= [
    new Customer(0,"Hamza Amir"),
    new Customer(1,"Omar Mohamed"),
    new Customer(2,"Ali AbdElhafez"),
    new Customer(3,"Talya Omran"),
    new Customer(4,"Amir Mohamed"),
  ]

  getAllCustomers(){
    return this.customers
  }

  getCustomerById(id:number){
    return this.customers[id]
  }
}
