'use strict';

var store1={
  name: '1st and Pike',
  mincust: 23,
  maxcust:65,
  avgCookiesSale: 6.3,
  openhours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  calculate: function(){
    var ranNum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
    return Math.floor(ranNum*6.3);
  },

  render(){
    var bodyEL=document.createElement('section');
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');
    //print the store name on the page
    nameEl.textContent=this.name;

    var total=0;

    for(var i=0;i<this.openhours.length;i++){

      var cookies=this.calculate();
      total+=cookies;
      //print out the cookies number at that hour
      var tmsg=document.createElement('li');
      tmsg.textContent=`${this.openhours[i]}: ${cookies} cookies`;
      messageEl.appendChild(tmsg);
    }
    var ttmsg=document.createElement('li');
    ttmsg.textContent=`Total: ${total} cookies`;
    messageEl.appendChild(ttmsg);
    bodyEL.appendChild(nameEl);
    bodyEL.appendChild(messageEl);

    var mainEl=document.getElementById('main-content');
    mainEl.appendChild(bodyEL);
  }

};
store1.render();

