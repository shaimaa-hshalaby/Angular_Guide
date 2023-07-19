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
ng new hello-angular-world
cd hello-angular-world
ng serve 
```
-  the project name should not have spaces or test word.
-  a folder with the name **hello-angular-world*** will be created in the current working directory.
-  when creating the skeleton project, angular will ask you some questions to configure the application, and you can choose the default answers for now.
-  when you use the **ng serve** command to build an application and serve it locally, the server automatically rebuilds the application and reloads the page when you change any of the source files.
-  now your first application is up and running on http://localhost:4200/ with a default landing page.

# Angular project hierarchy
the following screenshot gives us a deep dive inside the hierarchy of the angular skeleton project to understand the structure:

![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/6f0bf544-ebec-40a9-8138-a4318639f44f)

### angular.json
  angular.json file provides project-specific configuration defaults. These are used for build and development tools provided by the Angular CLI.
for more details about configuration inside angular.json, please check the documentation https://angular.io/guide/workspace-config

### tsconfig.json
Browsers can't execute TypeScript directly. Typescript must be "transpiled" into JavaScript using the tsc compiler, which requires some configuration.
so tsconfig.json file holds the default configuration of the tsc compiler that is used 
for more details about the tsconfig.json, please check the documentation https://angular.io/guide/typescript-configuration


### AppComponent
App Component is the default root component created in the angular-generated project(skeleton).

the component has 
  - Typescript file.  *(app.component.ts)*
  - HTML template file.  *(app.component.html)*
  - CSS template file.  *(app.component.css)*
  - Testing file.  *(app.component.spec.ts)*
    
![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/4b78ed62-372e-436f-85f4-4705c52b0cb3)

inside the component typescript file, we can find a typescript class decorated by *@Component()* decoration with some metadata that refers to the HTML template, CSS file and the selector name.

![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/93068d63-5c51-4a5e-ac4f-288ccf9b1ab8)



### App Module *(app.module.ts)


