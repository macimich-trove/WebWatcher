const express = require('express');
const app = express();
const cors = require('cors');
const morganlogs = require('morgan');
const cheerio = require('cheerio');

const Stream = require('stream');



const router = app.router;


const port = process.env.PORT || 4002;

const {Logger, DevFormat} = require('./middleware/logger-middleware.js');




var corsOptions = [{origin: 'localhost:3000', methods: ['GET', 'POST', 'PUT', 'DELETE']},{}]
app.use(cors(...corsOptions));
console.log(...corsOptions)

app.use(Logger)




app.use(morganlogs(DevFormat));




router.get('/stats', (req, res) => {

console.log("#STATS ROUTE#");
const getLogs = Logger();

const PageHtml = getLogs.map((Request) => `<li><b>${Request}</b></li>`).join(' ');

  res.write(`<h1><b>#STATS ROUTE#</b></h1>`);
  res.write(PageHtml);
  // End the response to avoid hanging
  res.end();

});




app.use(express.json()); 


router.get('/dashboard', (req, res) => {
res.write(JSON.stringify("DASHBOARD"));
res.end();


});

router.get('/', (req, res) => {

appdata = JSON.stringify("HOME ROUTE");
//console.log(app);

res.write(appdata);
res.end();

});
















//Send route stats and JSON payload
//const PageHtml= RequestMethodsLog.map((x)=>x).join(' ');









if (process.env.NODE_ENV !== 'test') {
  app.listen(port, (req ,res) => {
  console.log(`Server listening on ${port}`);
   });

}

module.exports = {router, port}

