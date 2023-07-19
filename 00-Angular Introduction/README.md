# What is the Angular?
Angular is a development platform, built on TypeScript to create reactive single-page applications.

As a platform, Angular includes:
-  A component-based framework for building scalable web applications
-  A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more
-  A suite of developer tools to help you develop, build, test, and update your code
-  With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with minimal effort.



# Angular versions?

![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/dffacb1e-b331-4d3f-ac5b-33b7e7feec58)

-  Angular1 is called AngularJS
-  the angular2 is totally different than angular1, but the later versions are depending on the angular2
-  after the angular2 version, the difference between version and version is very minor and the angular later versions are backwards compatible changes.
-  the angular team releases a new version every 6 months

# What is npm?
-  npm stands for Node Package Manager.
-  npm is the world's largest Software Registry (Lib
-  rary).
-  npm is also a software Package Manager and Installer.
-  npm includes a CLI (Command Line Client) that can be used to download and install software.
-  npm is used to install angular.

# Download the Nodejs to use npm for bundling and packaging dependencies needed by Angular
-  navigate to the official nodejs page https://nodejs.org/en and download the nodejs.
-  install nodejs to your local machine.
-  now you have npm installed on your machine and you can use it to download angular dependencies.
  
# download the official Angular CLI
-  navigate to https://angular.io/cli and follow the instruction to download angular cli.
-  open the command prompt and run the following command to install the cli.

```
npm install -g @angular/cli
```

# Setup Hello World Angular Application

To create, build, and serve a new, basic Angular project on a development server, go to the parent directory of your new workspace and use the following commands:
```
ng new my-first-project
cd my-first-project
ng serve 
```
-  the project name should not have spaces or test word.
-  a folder with the name ***my-first-project*** will be created in the current working directory.
-  when creating the skeleton project, angular will ask you some questions to configure the application, and you can choose the default answers for now.
-  when you use the ***ng serve*** command to build an application and serve it locally, the server automatically rebuilds the application and reloads the page when you change any of the source files.
-  now your first application is up and running on http://localhost:4200/ with a default landing page.
