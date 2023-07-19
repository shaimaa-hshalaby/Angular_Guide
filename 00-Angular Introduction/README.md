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
Every application has at least one Angular module, the root module, which must be present for bootstrapping the application on launch. By convention and by default, this NgModule is named AppModule.
we can check the details of this AppModule inside the file *app.module.ts* 

![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/ad6d9393-79d1-4291-9a09-e453a87354e7)

Deep dive inside the app.module.ts file

![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/0474bd77-cccc-4dce-b622-5b61274f3b97)


-  **The @NgModule decorator**
      -  the @NgModule decorator identifies AppModule as a NgModule class. @NgModule takes a metadata object that tells Angular how to compile and launch the application.
-  **declarations array**
     -  The module's declarations array tells Angular which components belong to that module. As you create more components, add them to declarations.
     -  by default, angular does not scan all your files to search for components, instead, you must register your components by yourself.
     -  we can declare components, pipes and directives in the declarations array.
     -  components, pipes and directives must belong to one module only
     -  to register components to a module, we must do 3 steps:
         - export the component, pipe or directive from the file where we wrote it.
         - import the component, pipe or directive to the module file
         - add it to the *declarations* array
         - 
-  **Imports array**
    -  The module's imports array appears exclusively in the @NgModule metadata object. It tells Angular about other NgModules that this particular module needs to function properly.
 
- **Providers array**
    -  The providers array is where you list the services the application needs. When you list services here, they are available app-wide.

- **bootstrap array**
    -  The application launches by bootstrapping the root AppModule, which is also referred to as an entryComponent.
    -  the bootstrapping process creates the component(s) listed in the bootstrap array and inserts each one into the browser DOM.
    -  while you can put more than one component, most application bootstrap a single root component (AppComponent by default).
  
### main.ts file

-  the entry point of the angular application is the main.ts file
-  we can find the content of the main.ts file in the following screenshot:
  
![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/3734806a-35ee-4aed-bea8-ac432463c18b)



