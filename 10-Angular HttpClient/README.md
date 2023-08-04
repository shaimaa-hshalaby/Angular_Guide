## Http Client Introduction

Most front-end applications need to communicate with a server over the HTTP protocol, to download or upload data and access other back-end services.

- Angular HttpClient is a built-in module in Angular that allows you to make HTTP requests to a server and retrieve data. 
- It provides a simplified API for handling HTTP requests and responses, making it easier to work with RESTful APIs.
- With the Angular HttpClient module, you can perform various HTTP operations such as GET, POST, PUT, DELETE, etc.
- It also supports features like request headers, query parameters, request/response interceptors, error handling, and more.
- You can find the official documentation for HttpClient by visiting this [link](https://angular.io/guide/understanding-communicating-with-http)
  
## HTTP Request
  
  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/304408e3-b7f3-4d8a-86fe-295688fe33af)

The parts of an HTTP request include:
-  **Request Line:** This is the first line of the request and contains the HTTP method (such as GET, POST, PUT, DELETE), the URL or URI (Uniform Resource Identifier) of the resource being requested, and the HTTP version.
-  **Request Headers:** Headers provide additional information about the request, such as the type of data being sent, the content length, the accepted response formats, and more. Headers are key-value pairs separated by a colon (:).
-  **Body (Optional):** The body of the request contains any additional data that needs to be sent to the server, such as form data. This part is optional and not present in all types of requests.

## What is the meaning of APIs
-  An API is often used to enable communication between a client application (such as a web browser or a mobile app) and a server. 
-  The server exposes a set of endpoints or URLs that the client can send requests to, and the server responds with the requested data or performs the requested actions.
-  APIs can be used to access various services and resources, such as retrieving data from a database, interacting with external services (e.g., payment gateways, social media platforms), or controlling hardware devices.
-  APIs are commonly used in web development to build more dynamic and interactive applications. They provide a standardized way for different systems to interact and exchange information, enabling developers to leverage existing functionality and integrate different services into their applications.


## Setup for server communication

-  Before you can use HttpClient, you need to import the Angular HttpClientModule. Most apps do so in the root AppModule
    ```
     @NgModule({
      declarations: [
       //
      ],
      imports: [
        //
        HttpClientModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
   ```
  
