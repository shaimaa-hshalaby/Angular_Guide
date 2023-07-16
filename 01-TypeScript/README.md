# What is TypeScript?
-  TypeScript is a syntactic superset of JavaScript which adds static typing.
-  This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
-  TypeScript uses compile time type checking. This means it checks if the specified types match before running the code, not while running the code.
-  


# Why do we use Typescript?
-  Javascript is a dynamically typed programming language, functions do not expect specific types of parameters.
-  

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
   # Type Inference
   

