//For finer control of scraper functionality
const cheerio = require('cheerio');
const pm2 = require('pm2');
const htmlparser = require('node-html-parser');


export default class CrawlerInstance(){
     constructor(endpoint, id="" ,class_=""){
         this.endpoint = endpoint;
         this.id = id;
         this.class_= class_;
	 this.LoadedBody = await cheerio.fromURL(endpoint);

}

const LoadedBody = await cheerio.fromURL(endpoint);





}




