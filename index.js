const express = require('express');
const app = express();
const cors = require('cors');
const morganlogs = require('morgan');
const cheerio = require('cheerio');
const Stream = require('stream');

const port = process.env.PORT || 4002;

//const {} = require('./middleware/logger-middleware.js');
var corsOptions = [{origin: 'localhost:3000', methods: ['GET', 'POST', 'PUT', 'DELETE']},{}]
app.use(cors(...corsOptions));
console.log(...corsOptions)


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
      callback(); // Successful callback
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









app.use(morganlogs(DevFormat, {stream: StreamObject}));




app.get('/stats', (req, res) => {
console.log("#STATS ROUTE#");
const PageHtml = RequestMethodsLog.map((Request) => `<li><b>${Request}</b></li>`).join(' ');
  res.write(`<h1><b>#STATS ROUTE#</b></h1>`);
  res.write(PageHtml);
  // End the response to avoid hanging
  res.end();

});




 

const router = app.router;
router.get('/OtherRoute', (req, res) => { res.write(JSON.stringify("OtherRoute")); res.end(); });
router.get('/', (req, res) => {res.send("HOME ROUTE"); });







if (process.env.NODE_ENV !== 'test') {
  app.listen(port, (req ,res) => {
  console.log(`Server listening on ${port}`);
   });

}

module.exports = {router, port}

