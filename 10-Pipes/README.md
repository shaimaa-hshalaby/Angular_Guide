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


## Resources
-  Angular documentation https://angular.io/guide/pipes
-  Angular API reference https://angular.io/api?type=pipe
