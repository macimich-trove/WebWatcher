import express = require('express');
import router = express.Router();
import {Logger, getRequestLogs} from './middleware/logger-middleware.js';
 
//import react main </App> compenent
//import react-dom
//use react-dom Lib for SSR based rendering actions  

router.use(Logger);

router.get('/dashboard', (req, res) => {

res.send(JSON.stringify("DASHBOARD ROUTE"));

res.end();
});



router.get('/', (req, res) => {


});


module.exports = router;



/*
app.use(morganlogs(DevFormat));
*/
