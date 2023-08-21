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
