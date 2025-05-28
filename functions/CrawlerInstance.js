//For finer control of scraper functionality
const cheerio = require('cheerio');
const pm2 = require('pm2');
const htmlparser = require('node-html-parser');


class  CrawlerInstance(){
     constructor(endpoint, id="" ,class_=""){
         this.endpoint = endpoint;
         this.id = id;
         this.class_= class_;
}




function ParseBody(endpoint, regex="",flags=""){ 

const LoadedBody = await cheerio.fromURL(endpoint);

if(regex!==null && flags!==null){
   console.log("Filtering based on REGEX pattern")
   var RegExp = new RegExp(regex, flags);
}




return LoadedBody // Call endpoint to get Body


};



function CreateCron(cronString){


return;
}



}
module.exports{Parser}




