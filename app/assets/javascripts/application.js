// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require jquery.cookie
//= require_tree .
   
 $(function(){
   
  
  var result = '不明';
 
  var agent = window.navigator.userAgent.toLowerCase();
  var version = window.navigator.appVersion.toLowerCase();
 
  if(agent.indexOf("msie") > -1){
    if (version.indexOf("msie 6.") > -1){
      result = 'IE6';
    }else if (version.indexOf("msie 7.") > -1){
      result = 'IE7';
    }else if (version.indexOf("msie 8.") > -1){
      result = 'IE8';
    }else if (version.indexOf("msie 9.") > -1){
      result = 'IE9';
    }else if (version.indexOf("msie 10.") > -1){
      result = 'IE10';
    }else{
      result = 'IE(バージョン不明)';
    }
  }else if(agent.indexOf("trident/7") > -1){
    result = 'IE11';
  }else if(agent.indexOf("edge") > -1){
    result = 'Edge';
  }else if (agent.indexOf("chrome") > -1){
    result = 'Chrome';
  }else if (agent.indexOf("safari") > -1){
    result = 'Safari';
  }else if (agent.indexOf("opera") > -1){
    result = 'Opera';
  }else if (agent.indexOf("firefox") > -1){
    result = 'Firefox';
  } else {
     result = 'undifined';
  }
 
     if (result=='Chrome') {
      
       $('#select_gengo').css('visibility', 'visible');
       $('#mic').css('visibility', 'visible');
       
      } else {
        
        $('#select_gengo').css('visibility', 'hidden');
       $('#mic').css('visibility', 'hidden');
    
     }
 
 });     
  
      

  

