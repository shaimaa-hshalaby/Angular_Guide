## Angular Routing

 As users perform application tasks, they need to move between the different views that you have defined.
 To handle the navigation from one view to the next, you use the *Angular Router*


#### Generate an application with routing enabled
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

#### Styling Router Links

**routerLinkActive** 
Allows you to specify one or more CSS classes to add to the element when the linked route is active.
Angular checks if the path of the link is part of the current path or not, If yes, it will apply the routerLinkActive CSS class.
so this may lead to wrong behaviour if the link path is substring of the current path, the solution is to add an option that force angular to check the exact path as follows:

```
   <li class="nav-item active" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
       <a class="nav-link" routerLink="">Home</a>
   </li>
```

