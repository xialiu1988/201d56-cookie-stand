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
  //this.sum;

  stores.push(this);
  this.render();
}

//get random number
Store.prototype.getRandomCusPerHour=function(min,max){

  for(var i=0;i<openhours.length;i++){
    var ranNum=Math.floor(Math.random()*(max-min+1)+min);
    this.cusPerHour.push(ranNum);
  }

};

Store.prototype.getHourlySales=function(){

  this.getRandomCusPerHour(this.mincust,this.maxcust);
  for(var i=0;i<openhours.length;i++){
    var perHour=Math.round(this.cusPerHour[i]*this.avgCookiesSale);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal+=perHour;
  }
};


Store.prototype.render=function(){

  this.getHourlySales();
  //get the id of the table and append the content to that table
  var tbodyEl=document.getElementById('t-body');
  var trEl=document.createElement('tr');
  var tthEl=document.createElement('th');

  tthEl.textContent=this.name;
  trEl.appendChild(tthEl);

  for(let i=0;i<openhours.length;i++){
    var tdEl=document.createElement('td');
    tdEl.textContent=this.cookiesPerHour[i];
    trEl.appendChild(tdEl);

  }

  var dayTotal=document.createElement('td');
  dayTotal.textContent=this.dailyTotal;
  trEl.appendChild(dayTotal);
  tbodyEl.appendChild(trEl);


  createTableFooter(this);
};


//create a table for all the stores

function createTable(){

  var tblEl=document.getElementById('main-content');
  var theaderEl=document.createElement('thead');
  var tbodyEl=document.createElement('tbody');
  var tfootEl=document.createElement('tfoot');


  tblEl.appendChild(theaderEl);
  tblEl.appendChild(tfootEl);
  tblEl.appendChild(tbodyEl);

  //create id for some elements here
  tbodyEl.id='t-body';
  tfootEl.id='t-foot';

  var corner1=document.createElement('th');
  corner1.textContent='';
  theaderEl.appendChild(corner1);

  for(var i=0;i<openhours.length;i++){
    var thEl=document.createElement('th');
    thEl.textContent=openhours[i];
    theaderEl.appendChild(thEl);
  }

  var totalTitle=document.createElement('th');
  totalTitle.textContent='Total';
  theaderEl.appendChild(totalTitle);

  totalTitle=document.createElement('th');
  totalTitle.textContent='Totals';
  tfootEl.appendChild(totalTitle);
}


function createTableFooter(store){

  var removeTd = document.querySelectorAll('#t-foot td');

  for(var x = 0; x < removeTd.length; x++){
    removeTd[x].parentNode.removeChild(removeTd[x]);
  }

  var tfooterData=document.getElementById('t-foot');

  var allStoresTotalPerDay=0;

  for(var j=0;j<store.cookiesPerHour.length;j++){

    var storesTotalPerHour=0;
    for(var k=0;k<stores.length;k++){
      storesTotalPerHour+=stores[k].cookiesPerHour[j];
    }
    allStoresTotalPerDay+=storesTotalPerHour;
    var hourlyStoresTotalEl=document.createElement('td');
    hourlyStoresTotalEl.innerHTML=storesTotalPerHour;
    tfooterData.appendChild(hourlyStoresTotalEl);

  }
  var dailyStoresTotal=document.createElement('td');
  dailyStoresTotal.innerHTML=allStoresTotalPerDay;
  tfooterData.appendChild(dailyStoresTotal);

}

createTable();

new Store('1st and Pike',23,65,6.3);
new Store('Seatac and Airport',3,24,1.2);
new Store('Seattle Center',11,38,3.7);
new Store('Capitol Hill',20,38,2.3);
new Store('Alki',2,16,4.6);
