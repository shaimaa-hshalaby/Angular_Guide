## Http Client Introduction

 The HttpClient module in Angular is a powerful tool for making HTTP requests from your application to a server. It provides a convenient way to interact with APIs and retrieve data asynchronously.

-  HttpClient is a part of the '@angular/common/http' module in Angular.
-  HttpClient is built on top of the XMLHttpRequest API and provides a higher-level abstraction for handling HTTP requests and responses.
- It provides a simplified API for handling HTTP requests and responses, making it easier to work with RESTful APIs,  fetching data from servers, and sending data to servers.
- With the Angular HttpClient module, you can perform various HTTP operations such as GET, POST, PUT, DELETE, etc.
- HttpClient automatically performs JSON parsing and serialization, making it easier to work with JSON data in your requests and responses.
- HttpClient uses observables to handle asynchronous operations. This allows you to easily handle and transform the data returned by HTTP requests.
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

## Importing HttpClientModule 

When you import the HttpClientModule, you enable the use of the HttpClient service across your application. This module offers the essential dependencies and configuration required for performing HTTP requests with HttpClient.

Import the HttpClientModule from the '@angular/common/http' module into AppModule(the root module of your application). Add the following import statement at the top of the file, then add *HttpClientModule* to the declaration array:
  
   ```
    import { HttpClientModule } from '@angular/common/http';
     
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

Import the HttpClient service into your component.

  ```
    import { HttpClient } from '@angular/common/http';
  ```

To send and receive data from a server, you must inject the HttpClient service into your component constructor.

  ```
    constructor(private http: HttpClient) {}
  ```

## Send/Recieve data from a server (Making Requests)

In Angular, the HttpClient module provides a powerful and convenient way to send and receive data from a server by making HTTP requests. With the HttpClient, you can easily perform operations such as GET, POST, PUT, DELETE, and more. To send data to a server, you can use the post() method to make a POST request and include the data in the request body. This allows you to send data such as form inputs, JSON payloads, or any other data required by the server. On the other hand, to retrieve data from a server, you can use the get() method to make a GET request and receive the response data. The HttpClient module also supports handling headers, query parameters, and other request options. By utilizing the HttpClient module, you can seamlessly communicate with a server and exchange data, enabling you to build dynamic and interactive applications.

### Make a POST request


### Request data from a server (GET request)

When you need to retrieve data from a server using Angular, you can make use of the HttpClient module's get() method. This method allows you to send a GET request to a specified URL and receive the response data from the server.
the get method is an asynchronous method that sends an HTTP request and returns an Observable that emits the requested data when the response is received. 

The get() method takes two arguments; the endpoint URL from which to fetch, and an options object that is used to configure the request.

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/ed7af483-ddad-4715-893a-fc50c8351f3e)

Let's break down the parameters and options:

| PARAMETER NAME | DESCRIPTION |
|---|---|
| url (required): | The URL of the server endpoint to send the GET request to. |
| options (optional): | An object that allows you to specify additional options for the request, such as headers, parameters, response type, etc. This parameter is optional, and you can omit it if you don't need to customize the request.|
| headers (optional): | An object representing the headers to be sent with the request. You can pass either an instance of HttpHeaders or an object with key-value pairs representing the headers. |
| observe (optional): | Specifies the type of response to observe. The default value is 'body', which means the response body will be returned. Other options include 'response' (to get the full HTTP response) and 'events' (to get the progress events). |
| params (optional): | An object representing the query parameters to be sent with the request. You can pass either an instance of HttpParams or an object with key-value pairs representing the parameters.|
| reportProgress (optional): | A boolean value indicating whether to report the progress of the request. The default value is false. |
| responseType (optional): | Specifies the expected type of the response. The default value is 'json', but you can also choose 'text', 'blob', or 'arraybuffer'.|
| withCredentials (optional): | A boolean value indicating whether to include credentials (such as cookies) with the request. The default value is false.|


The get() method returns an Observable that emits the response data when the request is successful. You can subscribe to this Observable to handle the response data or use operators like a map() or tap() to transform or process the data before subscribing.

Here is an example of using get method without options:

  ```
   let url = "endpoint_url";
   let data = this.http.get<{ [key: string]: { title: string, content: string } }>(url)
         .subscribe(posts => console.log(posts));
  
  ```

-----------------------------------






Making GET requests: Demonstrate how to use the HttpClient instance to make GET requests to retrieve data from a server. Show examples of how to handle the response using subscribe() and handle errors using catchError().

Making POST requests: Show how to use the HttpClient instance to make POST requests to send data to a server. Provide examples of how to send JSON data in the request body and handle the response.

Adding headers to requests: Explain how to add headers to HTTP requests using the HttpHeaders class. Show examples of adding common headers like Content-Type and Authorization.

Handling request options: Discuss how to set request options such as query parameters, request body, and observe options using the HttpParams and HttpObserve classes.

Interceptors: Introduce the concept of interceptors in Angular and explain how they can be used with HttpClient to intercept and modify HTTP requests and responses.

Error handling: Discuss different approaches to error handling in HttpClient requests, such as using the catchError() operator, handling specific error codes, and displaying error messages to the user.

Testing HttpClient requests: Explain how to write unit tests for HttpClient requests using the HttpClientTestingModule and HttpTestingController provided by Angular's testing framework.
