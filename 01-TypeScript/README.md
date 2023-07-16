# What is TypeScript?
-  TypeScript is a syntactic superset of JavaScript which adds static typing.
-  This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
-  TypeScript uses compile time type checking. This means it checks if the specified types match before running the code, not while running the code.
-  


# Why do we use Typescript?
-  Javascript is a dynamically typed programming language, functions do not expect specific types of parameters.

# official typescript website
https://www.typescriptlang.org/

# online Typescript editor
you can find an online typescript compiler at this link
https://www.typescriptlang.org/play

# install Typescript
-  you need nodejs environment to be installed on your machine.
-  TypeScript is available as a package on the npm registry available as "typescript".
-  cd to the project directory and open a terminal
- run the following command to install the typescript compiler for this project
  ```
  npm install typescript
  ```
- to install typescript globally into your machine, you can add -g to your command
- 

```
  npm install typescript
  ```
# Typescript compiler


# basic types in Typescript
 -  primitives:
     - number
         ```
         let age:number;
         age = 30;
         ```
     - string
         ```
         let username:string;
         username = 'Shaimaa';
         ```
     - boolean
        ```
         let active:boolean;
          active = false;
         ```

 -  Objects and Arrays
     -  Arrays
         ```
          // arrays
          let names:string[];
          names = ["Hamza","Omar","Ali"];
         ```

      -  Objects
         ```
          let person:{
              name:string;
              age:number;
              active:boolean;
          }
          
          
          person = {
              name: 'Shaimaa',
              age: 30,
              active: false
          }
         ```

    -  Array of Objects
         ```
          let persons : {
              name:string;
              age:number;
              active:boolean;
          }[];
          
          persons = [
              {
                  name: 'Hamza',
                  age: 10,
                  active: true
              },
              {
                  name: 'Omar',
                  age: 9,
                  active: false
              },
              {
                  name: 'Ali',
                  age: 8,
                  active: true
              }
          
          
          ]
        ```
   # Type Inference
   In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation. For example, in this code
  ```
    let x = 30;
  ```

The type of the x variable is inferred to be number. This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.
writing the type here condsidered a redundancy.


# Union types
Union types are used when a variable can hold more than a single type.
 ```
    let code: string | number = 'C123';
    code = 123;
  ```


# Type Aliases
it’s common to want to use the same type more than once and refer to it by a single name.
So we can declare a type and use it as follows:

    ```
      type Person = {
          name: string
          age: number
          active: boolean
      }
      
      let p1: Person;
      
      p1 = {
          name: 'Aya',
          age: 20,
          active:true
      }
    
    ```


# Functions and Types

  - Return values
      In the typescript, we can declare the return type after parameters as follows:
         ```
            function add(a: number, b:number): number{
                return a+b;
            }
         ```
      -  in the previous example, the return type is redundant because typescript should infer this.
      -  function can return void, if there is no return value.

  - any
      If the type of paramter is not important, we can use the type **any**
        ```
        function print(value: any){
            console.log(value);
        }
        
        ```

  - Generic


# Classes, Constructors, access modifiers

# short hand notation in the classes


# interfaces
Object type definition


# class implements interface

