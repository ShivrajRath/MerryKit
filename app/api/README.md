## API
* This layer defines all the DB connection.
* The API is called from the route layer to perform CRUD operation.
* All API calls should be authenticated/authorized before coming to this layer.
* All methods should return the data response to callback from route layer. 
This would render a server page/ return the data the response