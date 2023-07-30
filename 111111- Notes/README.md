### 36 packages are looking for funding
### run `npm fund` for details
------

The message you mentioned is related to the npm package manager. When you see the message "36 packages are looking for funding" and it suggests running npm fund for details, it means that there are 36 packages in your project that are seeking financial support or sponsorship.

Running the npm fund command will provide you with more information about these packages and how you can contribute to their funding. It will display details such as the funding platform, the package name, and the URL where you can contribute.

This feature was introduced by npm to help open-source developers and maintainers receive financial support for their work. By contributing to the funding of these packages, you can help ensure their continued development and maintenance.


### Property 'xxxxxxx' has no initializer and is not definitely assigned in the constructor.

Just go to tsconfig.json and set

"compilerOptions": {
    "strictPropertyInitialization": false,
    ...
}

### angular does not call ngOnInit() for services

### Can't bind to 'queryParams' since it isn't a known property of 'a'.
Import RouterModule to imports in AppModule class