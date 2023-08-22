import { AccountStatus} from "./account-status.enum"

export interface ACCOUNT{

    code:string
    customerName:string
    status:AccountStatus
}