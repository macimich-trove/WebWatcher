const express = require('express');
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
const StreamObject = new Stream.Writable({
    write:function(chunk, encoding, callback) {
try{
   console.log(chunk.toString());
   console.log("Writing Request: #", RequestMethodsLog.push(chunk.toString()));
   console.log("Request Body:",RequestMethodsLog[RequestMethodsLog.length-1]);
   res.write(PageHtml);
if(RequestMethodsLog.includes('error')){ throw new Error('error');}
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
  ].join(' ')});


*/









///













// Register morgan middleware globally
//app.use(morganlogs(DevFormat, { stream: StreamObject }));

const RequestMethodsLog = [];
const StreamObject = new Stream.Writable({
  write: function (chunk, encoding, callback) {
    try {
      console.log(chunk.toString());
      console.log("Writing Request: #", RequestMethodsLog.push(chunk.toString()));
      console.log("Request Body:", RequestMethodsLog[RequestMethodsLog.length - 1]);
      if (RequestMethodsLog.includes('error')) {
        throw new Error('error');
      }
      callback(chunk); // Successful callback
    } catch (err) {
      callback(err);
    }
  }
});



const DevFormat = function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ');
};



















///

module.exports = {Logger: () => [...RequestMethodsLog], 
		  DevFormat: morganlogs(DevFormat, { stream: StreamObject })};

