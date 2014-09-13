## Frameworks
* App: Express
* Logging: Winston/Bunyan 
* Mongo ODM: Mongoose
* JS test: Jasmine
* JS test runner: Karma
* Build System: Gulp
* Authentication: Passport

## Architectural Pattern
* All api calls have to be via an API key. Each API key would have a limit.
* Don't allow any exception to bubble up. It could cause the server to stop.

## References
* http://scotch.io/tutorials/javascript/node-and-angular-to-do-app-application-organization-and-structure
* http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
* http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local