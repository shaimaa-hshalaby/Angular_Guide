import { Pipe, PipeTransform } from "@angular/core";
import { ACCOUNT } from "../models/account.model";

@Pipe({
    name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform{

    transform(accounts:ACCOUNT[],status: string) {
        if(status.toLowerCase() === 'all'){
            return accounts
        }
        let selectedAccounts:ACCOUNT[]=[]
        for(const account of accounts){
            if(account.status === status){
                selectedAccounts.push(account)
            }
        }
        return selectedAccounts
    }
}