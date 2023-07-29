## Angular Routing

 As users perform application tasks, they need to move between the different views that you have defined.
 To handle the navigation from one view to the next, you use the *Angular Router*


### Generate an application with routing enabled

1. use the following command to generate an angular application with routing enabled
  ```
  ng new routing-app --routing --defaults
  ```

 - This command created AppRoutingModule, Route[] array and registered the routes to the RoutingModule as shown in the screenshot below:
   
     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/54680b33-ab14-46d8-a51b-a17e33a9c331)

 - The angular CLI imported the AppRoutingModule for you in the AppModule

     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/78f043ca-051c-4774-a3c9-7a7d31fd8a97)

 - If you are going to manually enable the routing, you should do the previous steps on your own.

2. Create 2 components to navigate from one to another, use the Angular CLI to generate them
    ```
      ng g c first
      ng g c second
    ```

3. In the *AppRoutingModule*, we need to add routes that correspond to the 2 components that we have created, each route is an object that has 2 properties
    - path: path to the component
    - component: the component name
      
    ```
       const routes: Routes = [
          {path:"first",component:FirstComponent},
          {path:"second",component:SecondComponent}
       ];
    ```

4. To add links to the components, use a directive attribute *routerLink* with an anchor element as follows:
   
   ```
      <ul>
         <li><a routerLink="/first">First Component</a></li>
         <li><a routerLink="/second">Second Component</a></li>
      </ul>
   ```
   > routerLink accepts either absolute or relative paths, with relative paths, angular will append the value to the current path.
   
6. update the application template, and add the *router-outlet* directive where you want to display the content of the components
   ```
     <router-outlet></router-outlet>
   ```

### Styling Router Links

#### routerLinkActive:
   Allows you to specify one or more CSS classes to add to the element when the linked route is active. The following code specifies that the Css class when the router is active called 'active'
   
   ```

    <ul class="nav nav-tabs">
       <li class="nav-item active" routerLinkActive="active">
          <a class="nav-link" routerLink="">Home</a>
       </li>
       <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="/first">First</a>
       </li>
       <li class="nav-item" routerLinkActive="active" >
          <a class="nav-link" routerLink="/second">Second</a>
       </li>
    </ul>

   ```


 #### routerLinkActiveOptions:
   Angular checks if the path of the link is part of the current path or not, If yes, it will apply the routerLinkActive CSS class.
   so this may lead to wrong behaviour if the link path is substring of the current path, the solution is to add an option {exact: true} that force angular to check the exact 
   path as follows:
   
   ```
      <li class="nav-item active" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
          <a class="nav-link" routerLink="">Home</a>
      </li>
   ```

### Navigating Programatically

1. To add navigation programatically, we can add a button at the home page template and add click event handler to it as follows :
   ```
     <button class="btn btn-primary" (click)="loadFirstPage()">
         First
     </button>
   ```

2. Inject the Router service to the HomeComponent by adding it to the constructor arguments as follows:
   ```
     constructor(private router:Router){}
   ```
  
4. Add loadFirstPage() to the HomeComponent as follows:
   ```
     loadFirstPage(){
      this.router.navigate(['first'])
     }
   ```
   > path here always considered as an absolute path, there is needed configuration to add relatvife path 

5. build and load the application and try the button, the behavior will be as following:
   
    ![Untitled design (4)](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/2b285c3b-3f91-4cef-8249-542d03282d30)

6. To add a relative path, navigate method need more configuration to be passed as a javascript object, so we need to inject *ActivatedRoute* service and then path the configuration object with the *relativeTo* property as follows:
   ```
       constructor( private router:Router , private route:ActivatedRoute ){}
   ```
   >  The *ActivatedRoute* service provides access to the current route's information

7. modify the loadFirstPage() to make the path relative path to the current component route
    ```
     loadFirstPage(){
       this.router.navigate(['first'],{relativeTo:this.route})
     }
   ```

### Route order
the Router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes.


### Route Parameters

- Route parameters are used to pass dynamic values in the URL and retrieve them in a component. They allow you to create dynamic routes and handle different data based on the values in the URL.

- Route parameters are defined in the route configuration and are denoted by a colon followed by the parameter name. For example, consider the following route configuration:
  ```
   const routes: Routes = [
     {path:"customer/:id",component:CustomersComponent}
   ]
  ```

- The CustomersComponent will be loaded when the URL matches the pattern users/{id}, where {id} can be any value.
- To access the route parameter value in the component, you can use the ActivatedRoute service
  ```
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id']
    }
  ```

- To build a dynamic route link with a route parameter, you can use the routerLink directive as follows:
     ```
     <a [routerLink]="['/customer/',customer.id]">{{customer.name}}</a>
     ```

     > you must enclose the routerLink directive inside [] if the corresponding value is dynamically changed. But if the routerLink refer to a fixed value, you can use routerLink directive without brackets.

- We have read the value of the router parameter in the ngOnInit() hook method, but what if the router parameter changed after loading the component template?
  For such case, ActivatedRoute service created Observable for *paramMap* and you can subscribe to it, This allows you to update the component whenever the parameter value changes.

  ```
     this.route.params.subscribe(
       (params:Params)=>{
           this.id = params['id']
       }
     )
  ```

### Query parameters
As we mentioned before that the *ActivatedRoute* service provides access to the current route's information, including query parameters.
- So we need to import the *ActivatedRoute*
  ```
   import { ActivatedRoute } from '@angular/router';
  ```

- Then inject it into our component constructor 

  ```
   constructor(private route:ActivatedRoute) {}
  ```

- Access the query parameters using the snapshot property in the *ActivatedRoute* service
  ```
   ngOnInit(): void {
      let id = this.route.snapshot.queryParams['id']
      )
    }
  ```

- Also you can subscribe on the query parameter observable to listen to any change into their values as following:
   ```
   this.route.queryParams.subscribe(
      (params:Params) => {
         let id = params['customerId']
      }
    )
  ```

- The queryParams object will contain all the query parameters present in the current route. You can access individual query parameters using dot notation, like queryParams.paramName.

- To send query parameters in an Angular router link, you can use the *[queryParams]* property of the router link directive. This directive accept js object key-value pairs param or you can also bind the query parameters dynamically by using variables in your component. For Example:
  ```
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let customer of customers">
            <a routerLink="/test-query-param"
               [queryParams]="{customerId:customer.id}">{{customer.name}}</a>
        </li>
    </ul>
  ```
  
- you can navigate programatically with query parameters as shown in the code snipet below:
  ```
    const queryParams = { param1: 'value1', param2: 'value2' };
    this.router.navigate(['path'], { relativeTo: this.activatedRoute, queryParams: queryParams });
  ```
### Fragment
a router fragment is a part of the URL that comes after the hash symbol (#). It is used to navigate to a specific section within a page or component. Fragments are often used for anchor links or for scrolling to a specific section of a page.

1. To add fragment to the router link, you can use fragment directive as follows
    ```
     <a routerLink="/test-fragment" [fragment]="sectionName" >Test Fragment</a>
    ```
    >  you can use property binding or template statement to add value to the fragment directive

2. you can access the fragment value from the component instance using the *ActivatedRoute* service, so you need to import and inject ActivatedRoute into your constructor before using it.
   
4. you can get the fragment from the snapshot property as follows:
    ```
      let fragment = this.route.snapshot.fragment;
    ```
5. to listen to any change in the fragment value, you can use the observable created on the fragment as follows:
    ```
      this.route.fragment.subscribe(
          value =>{
            console.log("fragment is: "+value)
          }
        )
   ```

### Navigation programatically
- In Angular, you can navigate programmatically using the Router service.
- Router service provides navigate() method to navigate to different routes in th appliaction.
- Router.navigate() method documentation is shown below:

   ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/0e18e493-4402-4a7a-ad9f-8b3463d656c8)

- the second parameter is of type NavigationExtras that is Options that modify the Router navigation strategy. Supply an object containing any of these properties to a Router navigation function to control how the target URL should be constructed or interpreted. a list of the object properties is shown in the following screenshot from the documentation

   ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/6a9950f4-686b-4978-9b1b-4a8b81f392a7)


**queryParams**: This property allows you to specify query parameters for the destination route. It should be an object where the property names represent the query parameter names, and the property values represent the corresponding values. For example: { param1: 'value1', param2: 'value2' }.

**queryParamsHandling**: This property determines how to handle the query parameters when navigating. It can have the following values:

 - 'merge' (default): Merges the new query parameters with the existing ones.
 - 'preserve': Preserves the existing query parameters and discards the new ones.
 - '' (empty string): Removes all existing query parameters.

**fragment**: This property allows you to specify a fragment identifier (also known as a hash) for the destination route. It should be a string representing the fragment identifier, such as 'section1'.

**preserveFragment**: This property determines whether to preserve the existing fragment identifier when navigating. It can have the following values:
 - true: Preserves the existing fragment identifier.
 - false (default): Discards the existing fragment identifier.

**skipLocationChange**: This property determines whether the navigation should update the browser's URL. It can have the following values:
 - true: Does not update the browser's URL.
 - false (default): Updates the browser's URL.

**replaceUrl**: This property determines whether the navigation should replace the current browser history entry. It can have the following values:
 - true: Replaces the current history entry.
 - false (default): Adds a new history entry.


#### redirect programatically without any options
1. import the Router service
    ```
      import { Router} from '@angular/router';
    ```
2. inject the Router service to your component constructor
    ```
      constructor(private router: Router) { }
    ```
3. navigate as following
    ```
      redirectToOtherPage() {
        this.router.navigate(['path']);
      }
    ```
#### adding relative path progamatically
1. import the Router and ActivatedRoute services
    ```
      import { Router, ActivatedRoute } from '@angular/router';
    ```
2. inject the Router service to your component constructor
    ```
      constructor(private router: Router, private activatedRoute: ActivatedRoute){}
    ```
3. navigate as following
    ```
      redirectToOtherPage() {
        this.router.navigate(['path'], { relativeTo: this.activatedRoute });
      }
    ```

#### adding query parameters programatically
1. import the Router and ActivatedRoute services
    ```
      import { Router, ActivatedRoute } from '@angular/router';
    ```
2. inject the Router service to your component constructor
    ```
      constructor(private router: Router){}
    ```
3. navigate as following
    ```
     redirectToOtherPage() {
       this.router.navigate(['path'], { queryParams: { param1: 'value', param2: 'value' } });
     }
    ```
#### adding route parameters programatically
the *Router.navigate()* method allows you to navigate to a specific route and pass route parameters along with it as follows:
  ```
    import { Router } from '@angular/router';
    
    constructor(private router: Router) { }
    
    navigateToProduct(productId: number) {
      this.router.navigate(['/product', productId]);
    }
  ```

### Setting up redirects

### Setting up wildcard routes
-  a wildcard route is used to handle routes that do not match any specific route defined in your application.
-  It is typically used as a catch-all route to display a specific component or handle any other custom logic.
-  you must place the wildcard route at the end of your route configuration to ensure that it is only used when no other routes match.
-  To define a wildcard route in Angular, you can use the ** notation as part of your route configuration as follows:
  
    ```
      const routes: Routes = [
         // other routes
         { path: '**', component: NotFoundComponent } // custom component for 404 page
       ];
    ```
- you can use redirection with wildcard as follows:
    ```
       const routes: Routes = [
          // other routes
          { path: 'not-found', component: NotFoundComponent },
          { path: '**', redirectTo: '/not-found' }
        ];
     ```

### fragment
    
