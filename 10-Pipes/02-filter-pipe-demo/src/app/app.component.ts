import { Component } from '@angular/core';
import { ACCOUNT } from './models/account.model';
import { AccountStatus } from './models/account-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  statuses = Object.values(AccountStatus)

  filterStatus=''
  accounts:ACCOUNT[] = [
    { code: '1000', customerName:'Ahmed Hussin', status:AccountStatus.ACTIVE},
    { code: '2000', customerName:'Hamza Omran', status:AccountStatus.INACTIVE},
    { code: '3000', customerName:'Omar Mohamed', status:AccountStatus.PENDING},
    { code: '4000', customerName:'Ali Amir', status:AccountStatus.ACTIVE},
]


}
