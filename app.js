'use strict';
//loading all the images when open the browser
window.onload=function(){
  var imgs =['./Assets/chinook.jpg','Assets/cutter.jpeg','Assets/fish.jpg','Assets/frosted-cookie.jpg','Assets/shirt.jpg','Assets/family.jpg'];
  var i = 0;
  var idx=document.getElementById('add');
  idx.src='Assets/family.jpg';
  function time(){
    i++;
    i=i%6;
    idx.src=imgs[i];
  }
  setInterval(time,2000);
};

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
  stores.push(this);
  this.render();
}

//get random number
Store.prototype.getRandomCusPerHour=function(min,max){
  for(var i=0;i<openhours.length;i++){
    var ranNum=Math.ceil(Math.random()*(max-min+1)+min);
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
  trEl.id=this.name;
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
  theaderEl.id='t-header';
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


function createTableFooter(){
  var tfooterData=document.getElementById('t-foot');
  var allStoresTotalPerDay=0;

  for(var j=0;j<openhours.length;j++){
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
createTableFooter();

//event listener for adding new store to the table
var newData=document.getElementById('addNewStore');
newData.addEventListener('submit',addNewStore);
function addNewStore(e){
  e.preventDefault();
  var storeName=e.target.name.value;
  var min=e.target.mincust.value;
  var max=e.target.maxcust.value;
  var avg=e.target.avgcookie.value;
  //put all the existed store names in an array
  var existedName=[];
  for(var ii=0;ii<stores.length;ii++){
    existedName.push(stores[ii].name);
  }
  //if the name is not existed in the array , create a new instance of store,and calculate the totals again
  if(!existedName.includes(storeName)){
    new Store(storeName,min,max,avg);
    var tfooterData=document.getElementById('t-foot');
    tfooterData.parentNode.removeChild(tfooterData);
    var tblEl=document.getElementById('main-content');
    var tfootEl=document.createElement('tfoot');
    tblEl.appendChild(tfootEl);
    tfootEl.id='t-foot';
    var totalTitle=document.createElement('th');
    totalTitle.textContent='Totals';
    tfootEl.appendChild(totalTitle);
    createTableFooter();
  }
  else{
    var pos = stores.map(function(e) { return e.name; }).indexOf(storeName);
    stores.splice(pos,1);
    var rowEl=document.getElementById(storeName);
    rowEl.parentNode.removeChild(rowEl);
    new Store(storeName,min,max,avg);
    //remove the former totals row
    var tData=document.getElementById('t-foot');
    tData.parentNode.removeChild(tData);
    //create a new row with updated totals amount of sales
    var tbEl=document.getElementById('main-content');
    var footEl=document.createElement('tfoot');
    tbEl.appendChild(footEl);
    footEl.id='t-foot';
    var tTitle=document.createElement('th');
    tTitle.textContent='Totals';
    footEl.appendChild(tTitle);
    createTableFooter();
  }
}



