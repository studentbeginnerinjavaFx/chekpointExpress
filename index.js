const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();




 app.use(express.static(__dirname + "/public"));

 const date = new Date()
 const hour = date.getHours()
 const day = date.getDay()
 
 if(day == 0 || day == 6) {
  router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/messageer.html'));
    
  });
 } else {
 
   if( (hour >= 9 && hour <= 17) ) {
    router.get('/',function(req,res){
      res.sendFile(path.join(__dirname+'/index.html'));
      
    });
   }
   else {  
     console.log("I apologize, the server is currently unavailable. Please check the working hours from 9h to 17h")
     router.get('/',function(req,res){
      res.sendFile(path.join(__dirname+'/messageer.html'));
      
    });
   }
   
 }



  
  router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname+'/home.html'));
  });
  
  router.get('/service',function(req,res){
    res.sendFile(path.join(__dirname+'/service.html'));
  });

  router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
  });
  
  //add the router
  app.use('/', router);

    
      app.listen(5000, () => {
        console.log("server is running...");
      });
      
  
    
 

