const express = require('express');
//const app = require('../index.js');
const app = express();

const cors = require('cors');
const morganlogs = require('morgan');
const Stream = require('stream');

//####Nodejs native package is Distinct from new WritableStream### 
//E.G. const StreamObject = new WritableStream ({
//https://nodejs.org/api/stream.html



//PERF LOGGER DONE THE HARD WAY
// WE TAKING THE SCENIC ROUTE WITH THIS ONE


/*
const RequestMethodsLog = [];
app.get('/stats',(req, res) => {
//Send route stats and JSON payload
//const PageHtml= RequestMethodsLog.map((x)=>x).join(' ');
const PageHtml= RequestMethodsLog.map((Request) => `<li><b>${Request}</b></li>`).join(' ');
console.log("#STATS ROUTE#");

(() => {
res.write(`<h1><b>#STATS ROUTE#</b></h1>`);
})(); 

res.write(PageHtml);

});
*/



const RequestMethodsLog = [];
//app.use(express.json()); 



const Logger = function (req, res, next) {

const PageHtml= RequestMethodsLog.map((Request) => `<li><b>${Request}</b></li>`).join(' ');
console.log("#STATS ROUTE#");
(() => {
res.write(`<h1><b>#STATS ROUTE#</b></h1>`);
})();

res.write(PageHtml);



const StreamObject = new Stream.Writable({
    write:function(chunk, encoding, callback) {
try{
   console.log(chunk.toString());
   console.log("Writing Request: #", RequestMethodsLog.push(chunk.toString()));
   console.log("Request Body:",RequestMethodsLog[RequestMethodsLog.length-1]);
   //res.write(PageHtml);
   next();
if(RequestMethodsLog.includes('error')){ throw new Error('error');}

//if(RequestMethodsLog.length==10){RequestMethodsLog[(RequestMethodsLog.length-RequestM>

callback(); //Successful callback


}catch(err){
callback(err);
}
  }
});









const DevFormat = morganlogs(function (tokens, req, res) {
return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')},{stream:StreamObject});


app.use(morganlogs('DevFormat'));

}


module.exports = {Logger}
