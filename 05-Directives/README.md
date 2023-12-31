Directives
===========
Angular directives are a fundamental building block of Angular applications. They are used to extend and customize the behaviour of HTML elements in Angular templates. Directives allow you to create reusable components and manipulate the DOM (Document Object Model) in a declarative and efficient way. There are three main types of directives in Angular:


| directive type | description |
|---|---|
| **Component directives** | They are used to create custom elements with their own logic and appearance |
| **Attributes directives** | These directives modify the behaviour or appearance of an existing HTML element. They are typically applied as attributes to existing HTML elements. [ngClass,ngStyle] are examples of attribute directives.|
| **structural directive** | These directives alter the structure of the DOM by adding or removing elements based on conditions. They are preceded by an asterisk (*) in the template. [*ngFor,*ngIf] examples of structural directives|

----------------------------------
## Attribute Directives
Attribute directives in Angular are a type of directive that allows you to modify the behavior, appearance, or layout of an existing HTML element. They are applied as attributes of HTML elements and are used to create reusable behaviors that can be conditionally applied to elements based on certain conditions.

### Built-in Attribute Directives

-  *ngClass*:	Adds and removes a set of CSS classes.
-  *ngStyle*:	Adds and removes a set of HTML styles.
-  *ngModel*:	Adds two-way data binding to an HTML form element.


#### ngClass:
you can add CSS classes condititionally depending on an expression by this directive

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/b23f8f13-c29b-44bf-a628-26944d7622c2)


**Expression returns string**

  1. Create a component for this exercise, and add 2 style classes special & not-special to its style file:
     ```
        .special {
            width: 400px;
            background-color: aqua;
        }
        
        .not-special {
            width: 400px;
            background-color: blue;
            color: white;
        }
     ```

  2. Add a boolean property *isSpecial* to the component class as follows:
    
     ```
       isSpecial:boolean = true;
     ```


  3. Add div element to the template and add [ngClass] attribute directive with an expression to set the style to special or not-special
     ```
       <div  [ngClass]="isSpecial?'special':'not-special'"></div>
     ```

  4. add a button to toggle speciality as follows:

     ```
      <button (click)="isSpecial=!isSpecial">Toggle Speciality</button>
     ```

  5. The output should be as the following GIF
     
       ![Untitled (2500 × 1080 px)](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/3f164e03-4fe7-4392-a1f6-f19c42f405ec)

#### ngStyle directive

The ngStyle directive in Angular is used to dynamically apply inline styles to an HTML element. It allows you to bind styles to an element based on the values of properties or expressions in your component class.

Here's an example of using ngStyle directive

- create a component and add 2 properties for styling
    ```
  
      @Component({
        selector: 'app-example-ng-style',
        templateUrl: './example-ng-style.component.html',
        styleUrls: ['./example-ng-style.component.css']
      })
      export class ExampleNgStyleComponent {
      
        fontSize = 20
        isBold = true
      
      }
  
    ```

- In the component template add a div with ngStyle directive and use an expression to determine the style dynamically as follows:
    ```
      <div [ngStyle]="{ 'font-size.px': fontSize, 'font-weight': isBold ? 'bold' : 'normal' }">
        This div to test ng-Style.
      </div>
    ```

--------------------------------------------------------

## Structural directive

???????????????????????????????

???????????????????????????????

--------------------------------------------------------
## Create Custom Directive

let's create a custom directive that adds a background colour to the element:

1. To create a custom directive you need to create a class decorated by @Directive and then specify the selector which is a unique selector as follows:
     ```
        @Directive({
          selector: '[appBasicHighlighter]'
        })
        export class BasicHighlighterDirective{}
     ```
     > \[\] is not part of the selector name, but it informs the angular that this directive will be used as an attribute directive
     
2. or you can create the directive by using Angular CLI, here's the command
      ```
        ng g d <directive_name>
      ```
      
3. Add the directive class to the *declarations* array into the AppModule
     ```
        @NgModule({
        declarations: [
          AppComponent,
          BasicHighlighterDirective
        ],
     ```
  
4. you can use the dependency injection feature to inject the ElementRef parameter to the directive constructor, and then Angular will be responsible for passing the reference of the element that includes this directive.
      ```
        constructor(private elementRef:ElementRef) { }
      ```
   
5. Because we have an element reference injected into the directive, we can change the colour of the element background on the ngOnInit() method as follows:
       ```
         ngOnInit(): void {
            this.elementRef.nativeElement.style.backgroundColor = 'yellow'
         }
       ```
      > Accessing elements directly from the ElementRef is not a good practice, you can use Renderer

6. To test our custom directive, you can add it as an attribute to any element in a component template as follows
       ```
        <div appBasicHighlighter>
          <h1>Test Basic Highlighter</h1>
        </div>
       ```
   
-------------------------------------------------------------------------

## Renderer2

allows us to manipulate the DOM elements, without accessing the DOM directly. It provides a layer of abstraction between the DOM element and the component code. 

Renderer2 can do the following actions:

-  create an element
-  add a text node to it
-  append child element using the appendchild method.
-  add or remove styles
-  add or remove HTML attributes, CSS Classes & properties
-  attach and listen to events etc.

## Why changing directly in DOM is not advisable?

- DOM Manipulation works only in Browser. You will not able to use the App in other platforms like in a web worker, in Server (Server-side rendering), or in a Desktop, or in the mobile app, etc where there is no browser.
- Accessing the DOM directly means that you are bypassing the Angular lifecycle to syncronize between the component instance and the template

For more details about Renderer2, check the [documentation](https://angular.io/api/core/Renderer2)

---------------------------------------------------------------------------------

## Create Custom Directive Using Renderer

#### Changing Style

- you can follow the steps in this [section](#create-custom-directive) To create custom directive class
- to change style you can use Renderer2.setStyle() method that accept 3 parameters, the element, the DOM style property name, and the value of the property as follows:
  
    ```
       this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','pink')
    ```

#### Create Text 

- Also you can append inner text to the element using the Render, Here's an example of *createText* directive class
    ```
      @Directive({
        selector: '[createText]'
      })
      export class CreateTextDirective implements OnInit{
      
        constructor(private elementRef:ElementRef,private renderer:Renderer2 ) { }
      
        ngOnInit(): void {
          const textEl = this.renderer.createText("This content is added by the directive")
          this.renderer.appendChild(this.elementRef.nativeElement,textEl)
        }
      
      }
    ```

#### Create HTML childern

- By Renderer, you have a full control on the Element and you can do alot of things such creating elements and append childern to the provided element
- Here's an example of a directive that add \<label\> and \<input\> as childern to the provided element
    ```
      @Directive({
        selector: '[appendChild]'
      })
      export class appendChildDirective implements OnInit{
      
        constructor(private elementRef:ElementRef,private renderer:Renderer2 ) { }
      
        ngOnInit(): void {
          const inputEl = this.renderer.createElement('input') as HTMLInputElement
          const labelEl = this.renderer.createElement('label') as HTMLLabelElement
          inputEl.placeholder="Enter the username"
          inputEl.name="userName"
          labelEl.htmlFor="userName"
          labelEl.innerText="User Name:"
          this.renderer.appendChild(this.elementRef.nativeElement,labelEl)
          this.renderer.appendChild(this.elementRef.nativeElement,inputEl)
        }
  
    ```
------------------------------------------------------------

## Using Properties & @HostBinding() with Directives

What about changing the highlighter directive to accept the color as a property instead of setting a fixed value, here's the steps:

#### Using @Input() Decorator

- To add a property to your directive class that you can give it a default value, then pass it to the setStyle() method instead of passing a fixed value, you can use @Input() decorator to do that, Here's the directive after changing
    ```
      @Directive({
        selector: '[highlighterWithProperties]'
      })
      export class HighlighterWithPropertiesDirective implements OnInit{
      
        @Input() backgroundColor = 'purple'
      
        constructor(private elementRef:ElementRef,private renderer:Renderer2 ) { }
      
        ngOnInit(): void {
         this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor',this.backgroundColor)
        }
      
      
      }
    ```
- To use it you can add property binding to the element that is using the directive as follows:
    ```
      <div highlighterWithProperties [backgroundColor]="'aqua'">
        <h1>Test Highlighter with property color</h1>
      </div>
    ```
    
#### Adding Directive Name as an alias to the main property

- you can add an alias to the @Input() decorator with the name of the directive to bind the property direct to the directive attribute as follows:

    ```
      @Input('directive_name') backgroundColor = 'purple'
    ```

- you can use it as follows:
   ```
      <div [directive_name]="'orange'">
   ```

#### @HostBinding() decorator
- The @HostBinding() decorator in Angular is used to bind a class property to a host element's property(DOM property). It allows you to set properties on the host element directly from the directive or component class, making it a concise way to manipulate the host element's attributes and properties.

- Here's an example of binding the class property to the style.backgroundColor property and then we will not need Renderer to set the style
  ```
    @Input()
    @HostBinding('style.backgroundColor') backgroundColor = 'blue'
  ```
  
- the color blue is the default but you can change it by property binding

--------------------------------

## Directives with @HostListener()
The @HostListener() decorator in Angular is used to listen for events on the host element of a directive. It allows you to define event listeners in your directive or component class, so you can respond to events that occur on the element where your directive is applied.

- Here's an example of highlighter directive that change color of the background with *mouseenter* and *mouseleave* events
  ```
    @Directive({
      selector: '[highlighterWithHostListenter]'
    })
    export class HighlighterWithHostListenterDirective {
      
      @HostBinding('style.backgroundColor') backgroundColor = 'orange'
      constructor(private elementRef:ElementRef) { }
    
      @HostListener('mouseenter')
      onMouseEnter(){
        this.backgroundColor = 'yellow'
      }
    
      @HostListener('mouseleave')
      onMouseLeave(){
        this.backgroundColor = 'orange'
      }
    
    }

  ```
