var mySingleton = (function(){
  var instance;



  function Init(){
    this.private1 = Math.random();
    this.private2 = '2';
  }


  function getSingleton(){
   if (!instance){
     instance = new Init();
   }
   return instance;
  
  }
return {
getSingleton:getSingleton
}

})();
var getmeasingleton1 = mySingleton.getSingleton();
var getmeasingleton2 = mySingleton.getSingleton();
alert(getmeasingleton1.private1);
alert(getmeasingleton2.private1);