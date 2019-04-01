'use strict';
var openhours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//store1
var store1={
  name: '1st and Pike',
  mincust: 23,
  maxcust:65,
  avgCookiesSale: 6.3,
  calculate: function(){
    var ranNum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
    return Math.floor(ranNum*6.3);
  },
  render(){
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');
    //print the store name on the page
    nameEl.textContent=this.name;
    //totalcookies
    var total=0;

    for(var i=0;i<openhours.length;i++){

      var cookiesNum=this.calculate();
      total+=cookiesNum;
      //print out the cookies number at that hour
      var tmsg=document.createElement('li');
      tmsg.textContent=`${openhours[i]}: ${cookiesNum} cookies`;
      messageEl.appendChild(tmsg);
    }
    var ttmsg=document.createElement('li');
    ttmsg.textContent=`Total: ${total} cookies`;
    messageEl.appendChild(ttmsg);

    var mainEl=document.getElementById('main-content');
    mainEl.appendChild(nameEl);
    mainEl.appendChild(messageEl);

  }

};

store1.render();

//store2
var store2={
  name: 'SeaTac Airport',
  mincust: 3,
  maxcust:24,
  avgCookiesSale: 1.2,
  calculate: function(){
    var ranNum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
    return Math.floor(ranNum*1.2);
  },

  render(){
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');
    //print the store name on the page
    nameEl.textContent=this.name;
    //totalcookies
    var total=0;

    for(var i=0;i<openhours.length;i++){

      var cookies=this.calculate();
      total+=cookies;
      //print out the cookies number at that hour
      var tmsg=document.createElement('li');
      tmsg.textContent=`${openhours[i]}: ${cookies} cookies`;
      messageEl.appendChild(tmsg);
    }
    var ttmsg=document.createElement('li');
    ttmsg.textContent=`Total: ${total} cookies`;
    messageEl.appendChild(ttmsg);

    var mainEl=document.getElementById('main-content');
    mainEl.appendChild(nameEl);
    mainEl.appendChild(messageEl);

  }

};
store2.render();

//store3
var store3={
  name: 'Seattle Center',
  mincust: 11,
  maxcust:38,
  avgCookiesSale: 3.7,
  calculate: function(){
    var ranNum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
    return Math.floor(ranNum*3.7);
  },

  render(){
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');
    //print the store name on the page
    nameEl.textContent=this.name;
    //totalcookies
    var total=0;

    for(var i=0;i<openhours.length;i++){

      var cookies=this.calculate();
      total+=cookies;
      //print out the cookies number at that hour
      var tmsg=document.createElement('li');
      tmsg.textContent=`${openhours[i]}: ${cookies} cookies`;
      messageEl.appendChild(tmsg);
    }
    var ttmsg=document.createElement('li');
    ttmsg.textContent=`Total: ${total} cookies`;
    messageEl.appendChild(ttmsg);

    var mainEl=document.getElementById('main-content');
    mainEl.appendChild(nameEl);
    mainEl.appendChild(messageEl);

  }

};
store3.render();

//store4
var store4={
  name: 'Capitol Hill',
  mincust: 20,
  maxcust:38,
  avgCookiesSale: 2.3,
  calculate: function(){
    var ranNum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
    return Math.floor(ranNum*2.3);
  },

  render(){
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');
    //print the store name on the page
    nameEl.textContent=this.name;
    //totalcookies
    var total=0;

    for(var i=0;i<openhours.length;i++){

      var cookies=this.calculate();
      total+=cookies;
      //print out the cookies number at that hour
      var tmsg=document.createElement('li');
      tmsg.textContent=`${openhours[i]}: ${cookies} cookies`;
      messageEl.appendChild(tmsg);
    }
    var ttmsg=document.createElement('li');
    ttmsg.textContent=`Total: ${total} cookies`;
    messageEl.appendChild(ttmsg);

    var mainEl=document.getElementById('main-content');
    mainEl.appendChild(nameEl);
    mainEl.appendChild(messageEl);

  }

};
store4.render();
//store5
var store5={
  name: 'Alki',
  mincust: 2,
  maxcust:16,
  avgCookiesSale: 4.6,
  calculate: function(){
    var ranNum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
    return Math.floor(ranNum*4.6);
  },

  render(){
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');
    //print the store name on the page
    nameEl.textContent=this.name;
    //totalcookies
    var total=0;

    for(var i=0;i<openhours.length;i++){

      var cookies=this.calculate();
      total+=cookies;
      //print out the cookies number at that hour
      var tmsg=document.createElement('li');
      tmsg.textContent=`${openhours[i]}: ${cookies} cookies`;
      messageEl.appendChild(tmsg);
    }
    var ttmsg=document.createElement('li');
    ttmsg.textContent=`Total: ${total} cookies`;
    messageEl.appendChild(ttmsg);

    var mainEl=document.getElementById('main-content');
    mainEl.appendChild(nameEl);
    mainEl.appendChild(messageEl);

  }

};
store5.render();
