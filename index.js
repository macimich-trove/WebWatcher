const express = require('express');
const app = express();
const cors = require('cors');
const morganlogs = require('morgan');
const cheerio = require('cheerio');
const Stream = require('stream');

const port = process.env.PORT || 4002;

const {Logger, getRequestLogs} = require('./middleware/logger-middleware.js');


var corsOptions = [{origin: 'localhost:3000', methods: ['GET', 'POST', 'PUT', 'DELETE']},{}]
console.log(...corsOptions)



app.use(Logger); // Use the logger middleware globally
app.get('/stats', (req, res) => {

console.log("#STATS ROUTE#");
  const logs = getRequestLogs();
const PageHtml = logs.map((Request) => `<li><b>${Request}</b></li>`).join(' ');
  res.write(`<h1><b>#STATS ROUTE#</b></h1>`);
  res.write(PageHtml);
  // End the response to avoid hanging
  res.end();

});


app.get('/hello', (req, res) => {});

const mappedRoutes = [];

app.router.stack.forEach((x) =>{
if(x.route){ 
        mappedRoutes.push(x.route.path)
	//console.log("value of x::", x.route.path)
	//console.log("typeof value of x::",typeof(x.route.path))
}

});

console.log("All Registered Routes:", mappedRoutes);









if (process.env.NODE_ENV === 'test') {   
//run mock calls to api's within the jest testing framework
//Conduct docker DB calls to database 
}



const server = app.listen(port, () => {
     console.log("Server listening on Port", port);
});


module.exports = {server, app ,port, localRouter}

