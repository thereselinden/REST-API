# REST-API

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
