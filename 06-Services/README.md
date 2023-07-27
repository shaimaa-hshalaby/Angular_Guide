### What is a service?
A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.
-  A component should use services for tasks that don't involve the view or application logic.
-  Services are good for tasks such as fetching data from the server, validating user input, or logging directly to the console.
-  Services can depend on other services. 

### Why services
Components shouldn't fetch or save data directly, and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegating data access to a service.

### benefits of services:
-  modularity
-  reusability


### Dependency injection (DI)
DI is the part of the Angular framework that provides components with access to services and other resources.
Angular provides the ability for you to inject a service into a component to give that component access to the service.

