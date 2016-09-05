# Running the Application

## Step 1

Create a table with schema shown as below. Give same column names with the cases. 
Id – string (PK)
Title – String 
Status – String 
Insert some initial data in the table such that on running application will be loaded with some tasks. Make sure to insert done or pending as the value of status. 

## Step 2

REST API or Web API 

Create a REST API which will perform CRUD operation on the table. You can create REST service using any development stack of your choice. Just make sure to follow standard of REST and all operations like PUT, POST, DELETE, and GET will be performed on the same URL.

If you wish to create ASP.NET Web API, my article on same may help you. 

http://www.infragistics.com/community/blogs/dhananjay_kumar/archive/2015/06/05/a-step-by-step-guide-to-working-with-the-asp-net-web-api-and-angularjs.aspx

You may want to enable CORS also on the API, such that you can perform CRUD operation without Cross-Origin Request error. To enable CORS in ASP.NET Web API, my article on same may help you.    

http://www.infragistics.com/community/blogs/dhananjay_kumar/archive/2015/08/31/how-to-enable-cors-in-the-asp-net-web-api.aspx 

I would recommend to enable CORS on the global level. 

## Step 3
 
In the project open src/app/shared/data.service.ts file.  In this file change value of apiUrl with the URL of Web API created by you.

apiUrl : string = "http://task.sourabhsomani.com/api/todotasks";

## Step 4

Running the Application

1. Install [Node.js](http://nodejs.org)

1. Run `npm install` to install app dependencies

1. Run `npm start` to start the server and launch the app
