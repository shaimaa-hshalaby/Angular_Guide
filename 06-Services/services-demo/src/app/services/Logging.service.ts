import { Injectable } from "@angular/core"

@Injectable({ providedIn: 'root' })
export class LoggingService{
    public log(info:string){console.log(info)}
    warn(warn:string){console.warn(warn)}
    error(error:string){console.error(error)}
}