'use strict';
var stores=[];
var openhours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
function Store(name,mincust,maxcust,avgCookiesSale){
  this.name=name;
  this.mincust=mincust;
  this.maxcust=maxcust;
  this.avgCookiesSale=avgCookiesSale;
  this.openhours=openhours;
  //create an empty customer per hour array
  this.cusPerHour=[];
  this.cookiesPerHour=[];
  this.dailyTotal=0;
  this.sum;

  stores.push(this);
  this.render();
}

//get random number
Store.prototype.getRandomCusPerHour=function(min,max){

  for(var i=0;i<this.openhours.length;i++){
    var ranNum=Math.floor(Math.random()*(max-min+1)+min);
    this.cusPerHour.push(ranNum);
  }

};

Store.prototype.getHourlySales=function(){

  this.getRandomCusPerHour(this.mincust,this.maxcust);
  for(var i=0;i<this.openhours.length;i++){
    var perHour=Math.round(this.cusPerHour*this.avgCookiesSale);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal+=perHour;
  }
};


Store.prototype.render=function(){

  this.getHourlySales();



};

