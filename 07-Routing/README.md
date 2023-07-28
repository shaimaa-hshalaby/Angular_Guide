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

### passing query paramaters
queryparam, fragment from page or programtically
    
