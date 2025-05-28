const express = require('express');
const app = express();
const cors = require('cors');
const morganlogs = require('morgan');
const cheerio = require('cheerio');

const Stream = require('stream');



const router = app.router;


const port = process.env.PORT || 4002;

const {Logger} = require('./middleware/logger-middleware.js');


var corsOptions = [{origin: 'localhost:3000', methods: ['GET', 'POST', 'PUT', 'DELETE']},{}]
app.use(cors(...corsOptions));
console.log(...corsOptions)


//app.use(logger); 
app.use(express.json()); 


//console.log("EXPRESS APP INSTANCE METADATA ",app); 
router.get('/dashboard', (req, res) => {


});

app.get('/', (req, res) => {

appdata = JSON.stringify(app);
console.log(app);
res.write(app.toString());
res.end();
});


//app.use(Logger);
//app.use(express.json()); 











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

// Morgan custom format function
const DevFormat = function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')};

//, {stream:StreamObject};





// Register morgan middleware globally
app.use(morganlogs(DevFormat, {stream: StreamObject}));

// Now the route handler:
app.get('/stats', (req, res) => {
  console.log("#STATS ROUTE#");

  const PageHtml = RequestMethodsLog.map((Request) => `<li><b>${Request}</b></li>`).join(' ');


(() => {
   res.send(`<h1><b>#STATS ROUTE#</b></h1>`);

})();

  res.write(PageHtml);
  res.end();
});

//Send route stats and JSON payload
//const PageHtml= RequestMethodsLog.map((x)=>x).join(' ');









if (process.env.NODE_ENV !== 'test') {
  app.listen(port, (req ,res) => {
  console.log(`Server listening on ${port}`);
   });

}

module.exports = {router, app, port}

