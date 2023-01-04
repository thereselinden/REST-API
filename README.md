# REST-API

## Description 

School project.
Here I have created a simpler REST API in NodeJS with express with the functionality for CRUD. The API stores fictive employed persons. 
The API has five endpoints, all listed below.
Each endpoint should perform what its calling method intends to perform, i.e. POST to add, PUT to update, GET to retrieve, etc. 
The project does not have a database, instead all data is saved in a JSON file. 
I have used Bootstrap5 as CSS framework.

### Requiremens met

- The project contains at least 4 endpoints (GET, POST, PUT & DELETE for a resource)
- All endpoints must be accessible via a REST Client file (.rest|.http)
- All data must be saved in a JSON file
- The data in the JSON file must be updated when something is added, updated or removed
- The API should respond with 404 if the data is missing.
- Git & GitHub have been used
- The project folder contains a README.md file
- The task was submitted on time!
- A client interface is built to call all the different endpoints of the API and present the data, editing forms must be filled in with existing information.
- Another GET endpoint has been added where a specific object can be retrieved


## Start application backend 
1. Run ```npm install``` to install node_modules and used dependencies
2. Run ```npm start``` to start server
3. Server is run on ```localhost:3000```

## Available endpoints

* To GET all employees:      GET    ```localhost:3000/employees```
* To GET single employee:    GET    ```localhost:3000/employees/:id```
* To POST new employee:      POST   ```localhost:3000/employees```
* To PUT single employee:    PUT    ```localhost:3000/employees/:id```
* To DELETE single employee: DELETE ```localhost:3000/employees/:id``` 


### Test endpoints 
1. Go to backend -> test -> employees.rest
2. Send request on each separate endpoints test listed 

## Start application frontend
1. Open with live server

### Test application features
1. Once live server started you should see stored JSON data
2. Click on each employee to view that unique employee info 
3. Click ```edit``` to update employee information
4. Click ```delete``` to remove/delete employee from database 
5. Create new employee by pressing the ```+``` sign in header
6. Enter information and click submit
