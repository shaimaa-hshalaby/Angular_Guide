


# What is TypeScript?
-  TypeScript is a syntactic superset of JavaScript which adds static typing.
-  This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
-  TypeScript uses compile time type checking. This means it checks if the specified types match before running the code, not while running the code.

# Why do we use Typescript?
- Javascript is a dynamically typed programming language, functions do not expect specific types of parameters.
- On the other hand, TypeScript is a statically typed superset of JavaScript that brings several benefits to the table, especially for large-scale projects and development teams. Some of the key advantages of using TypeScript include:

  -  **Static Typing:** TypeScript enforces strong typing, allowing developers to specify data types for variables, function parameters, and return values. This helps catch type-related errors during development, improving code quality and reducing bugs.
  
  -  **Enhanced IDE Support:** With TypeScript, IDEs and code editors can provide better code completion, auto-suggestions, and inline documentation. This leads to increased productivity and a more pleasant development experience.
  
  -  **Early Error Detection:** Since TypeScript performs static type checking, many errors can be caught at compile-time rather than runtime. This prevents certain classes of bugs from making their way into production code.
  
  -  **Code Maintainability and Readability:** The use of explicit types and interfaces in TypeScript makes the codebase more maintainable and easier to understand. It improves code documentation and makes it clear what each part of the code is expected to do.
  
  -  **Better Collaboration:** In team-based development environments, TypeScript helps improve collaboration among developers by providing a common understanding of the codebase through type annotations and interfaces.
  
  -  **Refactoring Support:** When refactoring code, TypeScript can quickly identify where changes are needed due to its static typing. This allows developers to confidently make changes without fear of breaking other parts of the codebase.
  
  -  **Compatibility with JavaScript:** TypeScript is a superset of JavaScript, meaning any existing JavaScript code is valid TypeScript code. Developers can incrementally adopt TypeScript in their projects without rewriting everything from scratch.
  
  -  **Tooling and Community:** TypeScript has robust tooling support and an active community that contributes to its continuous improvement. Many popular libraries and frameworks also provide TypeScript typings, making it easier to use them in TypeScript projects.
  

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

  ```
    npm install -g typescript
  ```
  > the location of global package in windows is %USERPROFILE%\AppData\Roaming\npm\node_modules

----------------------------------------------------------
  
  ## Exercise 1
  
  -  create a folder for your project
  -  navigate to it
  -  install typescript locally or globally
  -  test that it is installed by the following command
      ```
        npx tsc --version
      ```
      > npx to run the local installation of tsc

----------------------------------------------------------
  
# Typescript compiler

-  TypeScript compiler is a tool that translates TypeScript code into plain JavaScript code.
-  The TypeScript compiler, also known as tsc, takes TypeScript source files (usually with the .ts extension) as input and produces JavaScript files (with the .js extension) as output.
-  The compiler also checks the code for syntax errors and performs static type checking, ensuring that the code adheres to the specified types.
-  After installing TypeScript, you can run the tsc command followed by the names of the TypeScript files you want to compile. For example, to compile a single TypeScript file:
     ```
      npx tsc myfile.ts
     ```
     
- Or, to compile all TypeScript files in a directory
   
     ```
      npx tsc
     ```
- Or, you can add the compilation command as a script in package.json file as follows
     ```
       "scripts": {
         "build": "tsc"
        }
     ```
  and then you can run the build script by the following command:
    ```
      npm run build
    ```
    
-  Configuration File (tsconfig.json): The TypeScript compiler can be configured using a tsconfig.json file, which allows developers to specify various compiler options and settings.
-  To generate an intial copy of tsconfig.json file with default settings, you can utilize the following command for the global npm package
      ```
        tsc --init
      ```

    or the following command for the local npm package

      ```
        npx tsc --init
      ```
- To customize the development settings for your project, you can modify the default settings in the tsconfig.json file. For example, consider modifying the *outDir* option to specify the desired location for the compiler to generate the JavaScript files.
  
----------------------------------------------------------

## Exercise 2

-  create tsconfig.json intial file
-  change the *outDir* option to ./js
-  add "strictPropertyInitialization": false to the compilerOptions object inside the tsconfig.json to not enforce you to intialize all class properties
-  into your project directory, run the following command to install http server
     ```
      npm install -g http-server
     ```
- create index.html file
- then run *http-server* command in the terminal to start the server and test the link http://localhost:8080/
- create a very basic ts file then compile it, notice the generated js file, use it into your html file
   
----------------------------------------------------------
# Basic types in Typescript
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
     -  Arrays:
         ```
          // arrays
          let names:string[];
          names = ["Hamza","Omar","Ali"];
         ```

      -  Objects:
    
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
           > for optional property you can add question mark as follows:  age?:number

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

## Type Inference
   Type inference is a feature that allows the compiler to automatically deduce the data types of variables and expressions without the need for explicit type annotations or declarations by the programmer. In other words, the compiler "infers" the types based on the context and the values used in the code.
   
  ```
    let x = 30;
  ```

The type of the x variable is inferred to be a number. This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types then writing the type in this case is considered a redundancy.

## Union types

Union types are used when a variable can hold more than a single type.
  ```
    let code: string | number = 'C123';
    code = 123;
  ```


## Type Aliases
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
-------------------------------------
## Exercise 3

- add some ts code to test different types that has been explained.
- compile your code and run your html page.
-------------------------------------

# Functions and Types

#### Return values
-  In the typescript, we can declare the return type as follows:
   ```
      function add(a: number, b:number): number{
          return a+b;
      }
   ```
-  in the previous example, the return type is redundant because the typescript should infer this.
-  function can return void if there is no return value.

#### any
-  If the type of the parameter is not important, we can use the type **any**
    ```
      function print(value: any){
          console.log(value);
      }
    ```
#### Generic

- you can define generic function as follows:
  ```
    function identity<T>(arg: T): T {
      return arg;
    }
    
    // Usage
    let result1 = identity<number>(42); // result1 will be of type number
    let result2 = identity<string>("Hello"); // result2 will be of type string
    let result3 = identity<boolean>(true); 
  ```
- or you can define generic class as follows:
  ```
    class Box<T> {
      private value: T;
    
      constructor(value: T) {
        this.value = value;
      }
    
      getValue(): T {
        return this.value;
      }
    }
    
    // Usage
    const box1 = new Box<number>(42); // box1 stores a number
    const box2 = new Box<string>("Hello"); // box2 stores a string
  ```
- or you can define generic interfaces as follows:

  ```
    interface Pair<T, U> {
      first: T;
      second: U;
    }
    
    // Usage
    const pair1: Pair<number, string> = { first: 42, second: "Hello" };
    const pair2: Pair<boolean, number> = { first: true, second: 100 };
  ```

# Classes, Constructors, access modifiers
To write a TypeScript class, follow these steps:

-  Create a new TypeScript file with a .ts extension (e.g., MyClass.ts).
-  Define the class using the class keyword.
-  Declare class properties and methods within the class body.
-  Optionally, add a constructor method to initialize the class properties.
-  Optionally, add access modifiers (public, private, or protected) to control the visibility of properties and methods.
- Here's an example:
  
  ```
    interface USER{
        id:number
        firstName:string
        lastName:string
    
    }
  ```
  
  ```
    class UserService{

      user:USER
  
      constructor(s:USER){
          this.user =s
      }
  
      setUser(id:number,fName:string,lName:string){
          this.user = {id:id,firstName:fName,lastName:lName}
      }
  
      printUserData(){
          console.log(JSON.stringify(this.user))
      }
    }

  ```

  ```
    <script>
          function testUserService(){
              const userService= new UserService({id:2,firstName:'amir',lastName:'omran'})
              userService.printUserData()
          }
    </script>         
  ```
  
**Access modifiers:**
-  public: Members with the public access modifier are accessible from anywhere.
-  private: Members with the private access modifier are only accessible within the class where they are declared.
-  protected: Members with the protected access modifier are accessible within the class where they are declared and in subclasses that extend the class.
  
# Short hand notation in the classes
In TypeScript, shorthand notation in classes allows you to define and initialize class properties directly within the constructor parameters. This shorthand is a concise way to declare properties and assign their values in one step. It helps reduce boilerplate code, especially when you have multiple properties to initialize.

  ```
    class Person {
      constructor(private name: string, private age: number) {}
    //
    }
  ```
In the above example, the Person class uses shorthand notation to declare and initialize the name and age properties directly within the constructor parameters. This is achieved by adding the private access modifier to the constructor parameters.

# interfaces
In TypeScript, interfaces are a powerful way to define the structure of an object. They act as contracts that describe the shape of objects and ensure that certain properties and methods exist on the object. Interfaces provide a level of abstraction and help in achieving strong typing, making it easier to catch errors during development.

To define an interface in TypeScript, you use the interface keyword, followed by the interface's name and the list of properties and methods it should have. Here's the basic syntax of an interface:

```
  interface InterfaceName {
    property1: type1;
    property2: type2;
    // ...
    method1(): returnType;
    method2(arg: argType): returnType;
    // ...
  }
```


