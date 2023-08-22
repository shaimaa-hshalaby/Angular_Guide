## What is the pipe?
  - A pipe is a feature that allows you to transform the output of an expression in your templates. 
  - Pipes are used to format, filter, or manipulate data before it is displayed to the user.
  - Angular provides several built-in pipes, and you can also create your own custom pipes to suit your application's specific needs.
  - Pipes are applied to template expressions using the | (pipe) symbol followed by the pipe name and any required arguments.
  - Applying too many pipes in a template can impact performance, as they are executed whenever there is a change detection cycle. 

## Built-in Pipes
  Here's a list of some of the commonly used built-in pipes:

  | PIPE | DESCRIPTION |
  |---|---|
  | DatePipe | Formats dates. |
  | UpperCasePipe | Transforms text to uppercase. |
  | LowerCasePipe | Transforms text to lowercase. |
  | CurrencyPipe | Formats currency values. |
  | DecimalPipe | Formats decimal numbers. |
  | PercentPipe | Formats numbers as percentages. |
  | JsonPipe | Converts a value into a JSON-formatted string. |
  | SlicePipe | Returns a portion of an array or string. |
  | AsyncPipe | Subscribes to an observable and returns its most recent value. |
  | KeyValuePipe | Transforms an object into an array of key-value pairs. |
  | TitleCasePipe | Transforms text to title case (first letter of each word capitalized). |
  | I18nPluralPipe | Provides translations for different plural cases. |
  | I18nSelectPipe | Provides translations based on a key. |

## How to use Built-in pipes in your templates
  Pipes are used within interpolation expressions ({{ }}) and binding expressions ([ ]) to modify the output of data before displaying it on the screen. 
Here are some examples of how to use pipes:

  ```
   {{ value | uppercase}}
  ```
  
  ```
   {{ value | lowercase}}
  ```
  
  ```
   {{ value | percent}}
  ```
    
## Parameterizing Built-in Pipes

-  pipes can accept parameters to customize their behaviour. This allows you to fine-tune how data is transformed and displayed using the pipes.
-  To pass parameters to Angular pipes, you can use the colon (:) syntax within the pipe expression in your template.
  Here are some examples of how to pass parameters to Pipes
  ```
    {{ myDate | date:'yyyy-MM-dd' }}
  ```
  
  ```
    {{ numberValue | currency:'USD'}}
  ```

- you can pass several parameters by using the colon (:) syntax as follows:
```
  {{ numberValue | currency:'EUR':'symbol'}}
```

## Pipe Chaining 
-  you can chain multiple pipes together to apply a series of transformations to your data. Pipe chaining allows you to perform multiple formatting or manipulation steps on your data in a single template expression.
- Just remember that the order of the pipes matters – the data flows from left to right through the chain.
- Each pipe in the chain processes the output of the previous one, and the result of the final pipe is displayed in the template.
Here's how you can chain pipes in your Angular 
```
  {{ myDate | date:'medium' | uppercase }}
```

## Creating a Custom Pipe
Custom pipes in Angular allow you to perform specific transformations on data before rendering it in the template.
Let's consider a simple example of creating a custom pipe that capitalizes the first letter of each word in a string.

- use Angular CLI to create a pipe using the following command:
  ```
    ng generate pipe capitalize
  ```

  This command will create a class decorated by @Pipe() and add the pipe class to the declarations array of the module as follows:

    ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/6a583b37-2681-4c17-839f-31fe4ea29a81)

    ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/d061663e-1d6d-4d6b-b3db-5d7ee5018f61)

- The pipe class should implement *PipeTransform* interface to implement the mandatory function *transform(value:any)*
- the pipe decorator has a name parameter which represents the name of the pipe that will be used in the text interpolation {{}}
- The transform function is responsible for receiving a value to transform and returns the transformed value.
- customize the pipe class to make the transformation that you need - in our example to capitalize the word- as follows:
    ```
      @Pipe({
        name: 'capitalize'
      })
      export class CapitalizePipe implements PipeTransform {
      
        transform(value:string): string {
          return value.charAt(0).toUpperCase()+value.slice(1)
        }
      
      }
  
    ```

    ```
      {{ 'hamza' | capitalize}}
    ```
- To capitalize the whole statement, here is the code:
  ```
     transform(value:string): string {
        return value.split(" ")
                    .map(word => word.charAt(0).toUpperCase()+word.slice(1))
                    .join(" ")
        
      }
  ```

  ```
    {{ 'hello world example' | capitalize}}
  ```

## Paramaterize the Custom pipe
In this example, we will walk through the process of creating a custom Angular pipe that filters an array of ACCOUNT objects based on their status. 
We will parameterize the pipe to allow dynamic filtering of the accounts array. 

1. Create ACCOUNT interface to clarify the structure of the ACCOUNT object
   ```
    export interface ACCOUNT{
        code:string
        customerName:string
        status:AccountStatus
    }
   ```

2. Create AccountStatus Enum that contains the available statues for the account as follows:
   ```
    export enum AccountStatus{
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        PENDING = 'PENDING'
    }
   ```

3. Create *StatusFilterPipe* that accepts a value of type *ACCOUNT[]* and another parameter that represents the selected status to filter with. here is the code of the pipe
   ```
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
   ```

4. In the *AppComponent* class
   -  Add accounts list as follows:
       ```
        accounts:ACCOUNT[] = [
            { code: '1000', customerName:'Ahmed Hussin', status:AccountStatus.ACTIVE},
            { code: '2000', customerName:'Hamza Omran', status:AccountStatus.INACTIVE},
            { code: '3000', customerName:'Omar Mohamed', status:AccountStatus.PENDING},
            { code: '4000', customerName:'Ali Amir', status:AccountStatus.ACTIVE},
        ]
       ```
   -  Add a string parameter to recieve the value of the selected status
      ```
       filterStatus=''
      ```

   - extract the AccountStatus Enum values to be used as options of a dropdown list
     ```
      statuses = Object.values(AccountStatus)
     ```
## Understanding the Promise

## Async pipe

## Resources
-  Angular documentation https://angular.io/guide/pipes
-  Angular API reference https://angular.io/api?type=pipe
